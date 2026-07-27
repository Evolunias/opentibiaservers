import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-seasonal-server-sweden');
}

export default function OriginaltibiaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-seasonal-server-sweden" />;
}
