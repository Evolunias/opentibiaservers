import Link from 'next/link';

export default function ResearchArticle({ article }) {
  return (
    <main className="server-wiki research-wiki">
      <nav className="server-wiki__portal-nav" aria-label="Research navigation">
        <Link href="/wiki">Server wiki</Link>
        <Link href="/research">Research library</Link>
        <Link href="/directory">Server directory</Link>
      </nav>
      <header className="server-wiki__header">
        <p className="server-wiki__eyebrow">Independent Research Wiki</p>
        <h1>{article.heading}</h1>
        <p className="server-wiki__lede">
          Canonical source:{' '}
          <a href={article.sourceUrl} rel="noopener noreferrer">{article.sourceUrl}</a>
          {' | '}
          type <code>{article.type}</code> | collection <code>{article.collection}</code>
        </p>
        <div className="server-wiki__actions">
          <a href={article.sourceUrl} className="server-wiki__button">Open live page</a>
          <Link href="/research" className="server-wiki__button server-wiki__button--ghost">Research index</Link>
          <Link href="/wiki" className="server-wiki__button server-wiki__button--ghost">Server wiki</Link>
          <Link href="/directory" className="server-wiki__button server-wiki__button--ghost">Directory</Link>
        </div>
      </header>
      <article className="server-wiki__content">
        <h2>Abstract</h2>
        <p>{article.abstract}</p>
        <h2>Quick facts</h2>
        <table className="server-wiki__table">
          <tbody>
            <tr><th>Title</th><td>{article.heading}</td></tr>
            <tr><th>Source URL</th><td><a href={article.sourceUrl}>{article.sourceUrl}</a></td></tr>
            <tr><th>Path</th><td><code>{article.pathname}</code></td></tr>
            <tr><th>Research key</th><td><code>{article.key}</code></td></tr>
            <tr><th>Type</th><td>{article.type}</td></tr>
            <tr><th>Collection</th><td>{article.collection}</td></tr>
            <tr><th>Formats</th><td>Markdown + MediaWiki (see content/research-wiki pack)</td></tr>
          </tbody>
        </table>
        <h2>Publishing notes</h2>
        <ul>
          <li>This is an independent research article generated for sitemap coverage.</li>
          <li>Keep attribution and a backlink to OpenTibiaServers.com.</li>
          <li>Do not spam unrelated encyclopedias. External hosts wait on auth.</li>
        </ul>
      </article>
    </main>
  );
}
