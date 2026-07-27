import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-canada');
}

export default function CarlinotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-canada" />;
}
