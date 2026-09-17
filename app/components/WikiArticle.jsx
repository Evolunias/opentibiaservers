import Link from 'next/link';

export default function WikiArticle({ page, related = [] }) {
  const listingHref = page.slug ? `/${page.slug}` : '/directory';
  const name = String(page.title || page.slug || '').replace(/ Open Tibia Server$/i, '');

  return (
    <main className="server-wiki">
      <header className="server-wiki__header">
        <p className="server-wiki__eyebrow">OpenTibiaServers Wiki</p>
        <h1>{name}</h1>
        <p className="server-wiki__lede">
          Canonical listing:{' '}
          <Link href={listingHref}>{`https://opentibiaservers.com${listingHref}`}</Link>
          {' | '}
          <a href={page.canonical} rel="noopener noreferrer">
            open canonical
          </a>
        </p>
        <div className="server-wiki__actions">
          <Link href={listingHref} className="server-wiki__button">
            View live listing
          </Link>
          <Link href="/directory" className="server-wiki__button server-wiki__button--ghost">
            Browse directory
          </Link>
          <Link href="/wiki" className="server-wiki__button server-wiki__button--ghost">
            All wiki pages
          </Link>
        </div>
      </header>
      <article
        className="server-wiki__content"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
      {related.length ? (
        <section className="server-wiki__related" aria-label="Related servers">
          <h2>Related Open Tibia servers</h2>
          <ul>
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/wiki/${item.slug}`}>{item.name}</Link>
                {' | '}
                <Link href={`/${item.slug}`}>listing</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <footer className="server-wiki__footer-nav">
        <Link href={listingHref}>Back to /{page.slug} listing</Link>
        {' | '}
        <Link href="/directory">Directory</Link>
        {' | '}
        <Link href="/wiki">Wiki index</Link>
      </footer>
    </main>
  );
}
