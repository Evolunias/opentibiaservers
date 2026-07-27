import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-custom-map-server');
}

export default function Ameria84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-custom-map-server" />;
}
