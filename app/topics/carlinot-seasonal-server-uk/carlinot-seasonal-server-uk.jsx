import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-uk');
}

export default function CarlinotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-uk" />;
}
