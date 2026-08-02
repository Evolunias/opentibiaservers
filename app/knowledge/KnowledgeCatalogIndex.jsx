import Link from 'next/link';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import {
  getKnowledgeCatalogCard,
  getKnowledgeCatalogIndex,
  getKnowledgeCatalogMeta,
} from '@/lib/knowledge-catalog';

function buildCatalogUrl(type, { category = '', page = 1, query = '' } = {}) {
  const params = new URLSearchParams();
  if (query) params.set('q', query);
  if (category) params.set('category', category);
  if (page > 1) params.set('page', String(page));
  const suffix = params.toString();
  return `/knowledge/${type}${suffix ? `?${suffix}` : ''}`;
}

function pageWindow(currentPage, totalPages) {
  const values = new Set([1, totalPages]);
  for (let page = currentPage - 2; page <= currentPage + 2; page += 1) {
    if (page >= 1 && page <= totalPages) values.add(page);
  }
  return [...values].sort((left, right) => left - right);
}

export default function KnowledgeCatalogIndex({ type, searchParams = {} }) {
  const query = String(searchParams.q || '').trim();
  const category = String(searchParams.category || '').trim().toLowerCase();
  const requestedPage = Math.max(1, Number.parseInt(searchParams.page, 10) || 1);
  const catalog = getKnowledgeCatalogIndex(type, { category, page: requestedPage, query });
  const meta = getKnowledgeCatalogMeta();
  const cards = catalog.records.map((record) => getKnowledgeCatalogCard(record, type));
  const activeCategory = catalog.categoryCounts.find((entry) => entry.slug === category);
  const pageNumbers = pageWindow(catalog.currentPage, catalog.totalPages);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: catalog.definition.name,
    description: catalog.definition.description,
    url: buildAbsoluteUrl(`/knowledge/${type}`),
    isPartOf: {
      '@type': 'WebSite',
      name: getSiteName(),
      url: buildAbsoluteUrl('/'),
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: catalog.total,
      itemListElement: cards.map((card, index) => ({
        '@type': 'ListItem',
        position: ((catalog.currentPage - 1) * catalog.pageSize) + index + 1,
        name: card.name,
        url: buildAbsoluteUrl(card.path),
      })),
    },
  };

  return (
    <main className="knowledge-shell knowledge-catalog-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="knowledge-catalog-hero">
        <div className="knowledge-container knowledge-catalog-hero__inner">
          <nav className="knowledge-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Directory</Link>
            <span>/</span>
            <Link href="/knowledge">Knowledge</Link>
            <span>/</span>
            <span>{catalog.definition.shortName}</span>
          </nav>
          <p className="knowledge-kicker">Complete source inventory</p>
          <h1>{catalog.definition.name}</h1>
          <p>{catalog.definition.description}</p>
          <dl className="knowledge-catalog-hero__stats">
            <div>
              <dt>Entries</dt>
              <dd>{(type === 'items' ? meta.counts.items : type === 'monsters' ? meta.counts.monsters : meta.counts.spells).toLocaleString('en-US')}</dd>
            </div>
            <div>
              <dt>Reference</dt>
              <dd>{meta.source}</dd>
            </div>
            <div>
              <dt>Reviewed</dt>
              <dd><time dateTime={meta.generatedAt}>{meta.generatedAt}</time></dd>
            </div>
          </dl>
        </div>
      </header>

      <section className="knowledge-band knowledge-catalog-browser" aria-labelledby="catalog-browser-title">
        <div className="knowledge-container">
          <div className="knowledge-section-heading">
            <div>
              <p className="knowledge-kicker">Traceable reference pages</p>
              <h2 id="catalog-browser-title">
                {activeCategory ? activeCategory.label : query ? `Results for “${query}”` : `Browse all ${catalog.definition.shortName.toLowerCase()}`}
              </h2>
            </div>
            <p>{catalog.total.toLocaleString('en-US')} matching {catalog.total === 1 ? 'entry' : 'entries'}</p>
          </div>

          <form className="knowledge-catalog-search" action={`/knowledge/${type}`} role="search">
            <label htmlFor={`${type}-catalog-query`}>Search {catalog.definition.shortName.toLowerCase()}</label>
            <div>
              <input
                id={`${type}-catalog-query`}
                name="q"
                type="search"
                defaultValue={query}
                placeholder={`Search ${catalog.definition.shortName.toLowerCase()} by exact name...`}
                autoComplete="off"
              />
              {category ? <input type="hidden" name="category" value={category} /> : null}
              <button type="submit">Search</button>
              {(query || category) ? <Link href={`/knowledge/${type}`}>Clear</Link> : null}
            </div>
          </form>

          {catalog.categoryCounts.length > 1 ? (
            <nav className="knowledge-catalog-facets" aria-label={`${catalog.definition.shortName} categories`}>
              <Link
                href={buildCatalogUrl(type, { query })}
                aria-current={!category ? 'page' : undefined}
              >
                All <span>{(type === 'items' ? meta.counts.items : type === 'monsters' ? meta.counts.monsters : meta.counts.spells).toLocaleString('en-US')}</span>
              </Link>
              {catalog.categoryCounts.map((entry) => (
                <Link
                  key={entry.slug}
                  href={buildCatalogUrl(type, { category: entry.slug, query })}
                  aria-current={category === entry.slug ? 'page' : undefined}
                >
                  {entry.label} <span>{entry.count.toLocaleString('en-US')}</span>
                </Link>
              ))}
            </nav>
          ) : null}

          {cards.length > 0 ? (
            <div className="knowledge-catalog-grid">
              {cards.map((card) => (
                <article key={card.path} className="knowledge-catalog-card">
                  <p>{card.eyebrow}</p>
                  <h3><Link href={card.path}>{card.name}</Link></h3>
                  <p>{card.summary}</p>
                  <ul>
                    {card.facts.map((fact) => <li key={fact}>{fact}</li>)}
                  </ul>
                  <Link href={card.path} aria-label={`Open ${card.name} reference page`}>Open reference</Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="knowledge-empty" role="status">
              <h3>No source record found</h3>
              <p>Check the spelling or remove the active category filter.</p>
            </div>
          )}

          {catalog.totalPages > 1 ? (
            <nav className="knowledge-catalog-pagination" aria-label="Catalog pages">
              {catalog.currentPage > 1 ? (
                <Link href={buildCatalogUrl(type, { category, query, page: catalog.currentPage - 1 })} rel="prev">Previous</Link>
              ) : <span aria-disabled="true">Previous</span>}
              {pageNumbers.map((page, index) => (
                <span key={page} className="knowledge-catalog-pagination__number">
                  {index > 0 && page - pageNumbers[index - 1] > 1 ? <i aria-hidden="true">…</i> : null}
                  <Link
                    href={buildCatalogUrl(type, { category, query, page })}
                    aria-current={page === catalog.currentPage ? 'page' : undefined}
                  >
                    {page}
                  </Link>
                </span>
              ))}
              {catalog.currentPage < catalog.totalPages ? (
                <Link href={buildCatalogUrl(type, { category, query, page: catalog.currentPage + 1 })} rel="next">Next</Link>
              ) : <span aria-disabled="true">Next</span>}
            </nav>
          ) : null}
        </div>
      </section>

      <section className="knowledge-band knowledge-band--standard">
        <div className="knowledge-container knowledge-standard">
          <div>
            <p className="knowledge-kicker">Evidence boundary</p>
            <h2>Every value names its profile</h2>
          </div>
          <p>
            These pages describe a pinned TFS 1.6 source profile. Official Tibia and individual Open Tibia servers can use different data,
            scripts, rates, identifiers, mechanics, and content. Each entry links back to the primary definition used to build it.
          </p>
          <Link href="/knowledge/systems/ruleset-verification">Read the verification standard</Link>
        </div>
      </section>
    </main>
  );
}
