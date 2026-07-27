import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-54-custom-map-server');
}

export default function Ameria854CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-54-custom-map-server" />;
}
