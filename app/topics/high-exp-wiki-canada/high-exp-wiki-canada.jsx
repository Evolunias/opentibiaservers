import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-canada');
}

export default function HighExpWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-canada" />;
}
