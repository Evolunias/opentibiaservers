import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-custom-map-server');
}

export default function Ameria76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-custom-map-server" />;
}
