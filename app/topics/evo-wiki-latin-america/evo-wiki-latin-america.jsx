import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-wiki-latin-america');
}

export default function EvoWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-wiki-latin-america" />;
}
