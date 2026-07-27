import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-mexico');
}

export default function CarlinotSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-mexico" />;
}
