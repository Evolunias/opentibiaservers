import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-europe');
}

export default function LowExpWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-europe" />;
}
