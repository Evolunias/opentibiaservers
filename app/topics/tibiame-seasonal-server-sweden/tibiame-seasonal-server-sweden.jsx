import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-seasonal-server-sweden');
}

export default function TibiameSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiame-seasonal-server-sweden" />;
}
