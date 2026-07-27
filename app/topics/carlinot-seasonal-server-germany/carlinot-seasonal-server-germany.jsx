import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-germany');
}

export default function CarlinotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-germany" />;
}
