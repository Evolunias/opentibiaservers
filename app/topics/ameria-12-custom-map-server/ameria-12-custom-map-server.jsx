import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-custom-map-server');
}

export default function Ameria12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-custom-map-server" />;
}
