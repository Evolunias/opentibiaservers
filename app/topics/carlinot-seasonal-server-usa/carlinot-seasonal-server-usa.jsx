import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-usa');
}

export default function CarlinotSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-usa" />;
}
