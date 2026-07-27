import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-germany');
}

export default function RubinotSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-germany" />;
}
