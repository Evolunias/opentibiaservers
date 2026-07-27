import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-wiki-latin-america');
}

export default function FreshStartWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-wiki-latin-america" />;
}
