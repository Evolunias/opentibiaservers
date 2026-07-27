import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-europe');
}

export default function HighExpWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-europe" />;
}
