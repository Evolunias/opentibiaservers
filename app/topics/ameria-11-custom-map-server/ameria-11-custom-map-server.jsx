import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-custom-map-server');
}

export default function Ameria11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-custom-map-server" />;
}
