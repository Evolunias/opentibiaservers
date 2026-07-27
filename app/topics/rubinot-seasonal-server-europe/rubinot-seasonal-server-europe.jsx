import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-europe');
}

export default function RubinotSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-europe" />;
}
