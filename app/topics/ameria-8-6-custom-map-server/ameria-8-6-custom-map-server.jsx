import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-6-custom-map-server');
}

export default function Ameria86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-6-custom-map-server" />;
}
