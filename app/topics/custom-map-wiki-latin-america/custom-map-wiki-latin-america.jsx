import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-wiki-latin-america');
}

export default function CustomMapWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-wiki-latin-america" />;
}
