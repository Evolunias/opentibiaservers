import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-season-argentina');
}

export default function CustomMapSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-season-argentina" />;
}
