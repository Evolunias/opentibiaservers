import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-latin-america');
}

export default function RealMapSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-latin-america" />;
}
