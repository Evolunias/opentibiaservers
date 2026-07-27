import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-europe');
}

export default function FreshStartWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-europe" />;
}
