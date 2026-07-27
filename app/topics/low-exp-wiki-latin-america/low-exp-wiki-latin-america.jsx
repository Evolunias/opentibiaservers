import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-wiki-latin-america');
}

export default function LowExpWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-wiki-latin-america" />;
}
