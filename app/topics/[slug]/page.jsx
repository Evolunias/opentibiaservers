import Link from 'next/link';
import { notFound } from 'next/navigation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import { fetchDirectoryServers } from '@/lib/directory-data';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { buildServerSlug } from '@/lib/server-paths';
import {
  buildKeywordArticle,
  buildKeywordJsonLd,
  buildKeywordPageDescription,
  buildKeywordPageTitle,
  getKeywordPageBySlug,
  getRelatedKeywordPages,
  shouldIndexKeywordPage,
} from '@/lib/keyword-pages';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const page = getKeywordPageBySlug(params.slug);
  if (!page) {
    return {
      title: `Topic Not Found | ${getSiteName()}`,
      robots: { index: false, follow: true },
    };
  }

  const indexable = shouldIndexKeywordPage(page);
  const title = buildKeywordPageTitle(page);
  const description = buildKeywordPageDescription(page);
  const canonical = buildAbsoluteUrl(`/topics/${page.slug}`);

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: indexable, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: getSiteName(),
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

function factLabel(value) {
  return String(value || '').replace(/_/g, ' ');
}

export default async function KeywordTopicPage({ params }) {
  const page = getKeywordPageBySlug(params.slug);
  if (!page) notFound();

  const article = buildKeywordArticle(page);
  const related = getRelatedKeywordPages(page, 12);
  const directoryData = await fetchDirectoryServers({
    page: 1,
    pageSize: 8,
    search: page.seed_entity || page.keyword,
    onlineOnly: false,
  });
  const jsonLd = buildKeywordJsonLd(page);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      {jsonLd.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
              <Link href="/" className="font-semibold text-blue-700">Open Tibia Servers</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Topics</span>
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">{article.label}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-gray-950 md:text-5xl">{article.h1}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-700">{article.dek}</p>
            {!article.isIndexable ? (
              <div className="mt-5 rounded border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                This page is available for community enrichment but is marked noindex until it has enough unique value.
              </div>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/?search=${encodeURIComponent(page.seed_entity || page.keyword)}`} className="rounded bg-gray-950 px-5 py-3 text-sm font-bold text-white hover:bg-gray-800 hover:no-underline">
                Search Live Listings
              </Link>
              <Link href="/auth/register" className="rounded border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-gray-900 hover:border-gray-500 hover:no-underline">
                Register to Contribute
              </Link>
            </div>
          </div>

          <aside className="rounded border border-gray-200 bg-gray-50 p-5">
            <h2 className="mb-4 text-base font-bold text-gray-950">Keyword Facts</h2>
            <dl className="space-y-4">
              {article.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-semibold capitalize text-gray-900">{factLabel(fact.value)}</dd>
                </div>
              ))}
              <div>
                <dt className="text-xs font-bold uppercase tracking-wide text-gray-500">Search Volume</dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900">
                  {page.search_volume || 'Pending provider import'}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="space-y-8">
          {article.sections.map((section) => (
            <section key={section.heading} className="border-b border-gray-200 pb-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">{section.eyebrow}</p>
              <h2 className="mb-4 text-2xl font-bold text-gray-950">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-gray-700">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {directoryData.servers.length ? (
            <section className="pb-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-950">Matching Live Listings</h2>
              <div className="grid gap-3">
                {directoryData.servers.map((server) => (
                  <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-gray-200 bg-white p-4 hover:border-gray-400 hover:no-underline">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-base font-bold text-gray-950">{server.name}</h3>
                        <p className="text-sm text-gray-600">{server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p>
                      </div>
                      <div className="text-sm font-bold text-gray-950">{Number(server.players_online || 0).toLocaleString()} online</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="space-y-5">
          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Related Pages</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((item) => (
                <Link key={item.slug} href={`/topics/${item.slug}`} className="rounded border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 hover:border-gray-400 hover:no-underline">
                  {item.keyword}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-gray-950">Contribution Standard</h2>
            <p className="text-sm leading-7 text-gray-700">
              Useful contributions include official URLs, server ownership proof, screenshots, rules, launch details, uptime notes, and genuine player reviews.
            </p>
          </div>
        </aside>
      </section>

      <KeywordPageCommunity pageSlug={page.slug} keyword={page.keyword} />
    </main>
  );
}
