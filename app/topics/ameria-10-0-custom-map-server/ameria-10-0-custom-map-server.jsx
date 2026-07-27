import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-custom-map-server');
}

export default function Ameria100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-custom-map-server" />;
}
