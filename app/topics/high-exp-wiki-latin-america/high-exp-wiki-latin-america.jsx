import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-latin-america');
}

export default function HighExpWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-latin-america" />;
}
