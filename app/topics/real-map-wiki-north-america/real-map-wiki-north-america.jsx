import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-wiki-north-america');
}

export default function RealMapWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-wiki-north-america" />;
}
