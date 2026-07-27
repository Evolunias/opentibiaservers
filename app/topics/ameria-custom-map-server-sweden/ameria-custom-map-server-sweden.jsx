import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-sweden');
}

export default function AmeriaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-sweden" />;
}
