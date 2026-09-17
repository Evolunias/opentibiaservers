import Link from 'next/link';

export default function WikiArticle({ page }) {
  return (
    <main className="server-wiki">
      <header className="server-wiki__header">
        <p className="server-wiki__eyebrow">OpenTibiaServers Wiki</p>
        <h1>{page.title.replace(/ Open Tibia Server$/i, '')}</h1>
        <p className="server-wiki__lede">
          Canonical listing:{' '}
          <a href={page.canonical} rel="noopener noreferrer">
            {page.canonical}
          </a>
        </p>
        <div className="server-wiki__actions">
          <Link href={page.canonical.replace('https://opentibiaservers.com', '') || '/'} className="server-wiki__button">
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
    </main>
  );
}
