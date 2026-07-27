import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-sweden');
}

export default function AmeriaSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-sweden" />;
}
