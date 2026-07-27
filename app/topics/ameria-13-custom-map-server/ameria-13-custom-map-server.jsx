import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-custom-map-server');
}

export default function Ameria13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-custom-map-server" />;
}
