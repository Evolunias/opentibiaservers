import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-brazil');
}

export default function CarlinotSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-brazil" />;
}
