import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-seasonal-server-sweden');
}

export default function RubinotSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="rubinot-seasonal-server-sweden" />;
}
