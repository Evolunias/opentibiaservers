import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-france');
}

export default function CarlinotSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-france" />;
}
