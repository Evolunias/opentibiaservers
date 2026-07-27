import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-seasonal-server-canada');
}

export default function NtoStarSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-seasonal-server-canada" />;
}
