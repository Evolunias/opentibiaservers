import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-uk');
}

export default function RubinotSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-uk" />;
}
