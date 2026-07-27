import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-poland');
}

export default function CarlinotSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-poland" />;
}
