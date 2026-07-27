import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-north-america');
}

export default function CarlinotSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-north-america" />;
}
