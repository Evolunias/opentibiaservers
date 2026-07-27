import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-season-argentina');
}

export default function RealMapSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-season-argentina" />;
}
