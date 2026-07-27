import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-seasonal-server-sweden');
}

export default function OlderaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="oldera-seasonal-server-sweden" />;
}
