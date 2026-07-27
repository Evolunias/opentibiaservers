import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-canada');
}

export default function RubinotSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-canada" />;
}
