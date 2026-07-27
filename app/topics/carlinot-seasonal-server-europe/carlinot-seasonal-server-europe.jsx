import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-seasonal-server-europe');
}

export default function CarlinotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-seasonal-server-europe" />;
}
