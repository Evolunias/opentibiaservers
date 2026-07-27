import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-custom-map-server');
}

export default function Ameria96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-custom-map-server" />;
}
