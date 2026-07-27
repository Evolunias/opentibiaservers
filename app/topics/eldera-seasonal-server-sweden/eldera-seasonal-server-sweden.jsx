import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-seasonal-server-sweden');
}

export default function ElderaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="eldera-seasonal-server-sweden" />;
}
