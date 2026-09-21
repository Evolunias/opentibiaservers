import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { buildAbsoluteUrl, getSiteName } from '@/lib/seo';
import { listResearchSampleKeys, humanizeResearch } from '@/lib/research-wiki';

const title = 'Independent Research Wiki | Open Tibia Servers';
const description = 'Research dossiers in Markdown and MediaWiki syntax for every sitemap URL on OpenTibiaServers.com.';
const canonical = buildAbsoluteUrl('/research');

export const metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, siteName: getSiteName(), type: 'website' },
  twitter: { card: 'summary', title, description },
};

function readManifest() {
  try {
    const file = path.join(process.cwd(), 'content', 'research-wiki', 'manifest.json');
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return { urlCount: 0, byType: {} };
  }
}

export default function ResearchIndexPage() {
  const samples = listResearchSampleKeys().slice(0, 200);
  const manifest = readManifest();
  const byType = manifest?.byType || {};

  return (
    <main className="server-wiki server-wiki--index research-wiki">
      <nav className="server-wiki__portal-nav" aria-label="Research navigation">
        <Link href="/wiki">Server wiki</Link>
        <Link href="/research" aria-current="page">Research library</Link>
        <Link href="/directory">Server directory</Link>
      </nav>
      <header className="server-wiki__header">
        <p className="server-wiki__eyebrow">Independent Research Wiki</p>
        <h1>Research library</h1>
        <p className="server-wiki__lede">
          {manifest?.urlCount || 0} sitemap URLs covered with Markdown + MediaWiki research syntax.
          Full pack archive: content/research-wiki/research-wiki-pack.tgz.
          Contact: support@opentibiaservers.com
        </p>
      </header>

      <section className="server-wiki__content">
        <h2>Coverage by type</h2>
        <ul>
          {Object.entries(byType).sort((a, b) => b[1] - a[1]).map(([type, count]) => (
            <li key={type}><strong>{type}</strong>: {count}</li>
          ))}
        </ul>
        <p>
          Open any sitemap path as research at <code>/research/{'{key}'}</code> where key is the path with <code>/</code> replaced by <code>__</code> (example: <Link href="/research/cyntara">/research/cyntara</Link>).
        </p>
      </section>

      <h2 className="server-wiki__section-title">Sample research pages</h2>
      <ul className="server-wiki__index-list">
        {samples.map((key) => (
          <li key={key}>
            <Link href={`/research/${key}`}>{humanizeResearch(key.replace(/__/g, ' / '))}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
