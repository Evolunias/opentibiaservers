import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-latin-america');
}

export default function RealMapWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-latin-america" />;
}
