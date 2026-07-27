import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-canada');
}

export default function LowExpWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-canada" />;
}
