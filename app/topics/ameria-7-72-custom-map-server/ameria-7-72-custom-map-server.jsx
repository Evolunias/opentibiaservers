import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-72-custom-map-server');
}

export default function Ameria772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-72-custom-map-server" />;
}
