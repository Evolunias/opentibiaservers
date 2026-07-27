import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-south-america');
}

export default function RubinotSeasonalServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-south-america" />;
}
