import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-north-america');
}

export default function RealMapSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-north-america" />;
}
