import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-seasonal-server-sweden');
}

export default function TibiaraSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiara-seasonal-server-sweden" />;
}
