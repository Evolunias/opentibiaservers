import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-custom-map-servers');
}

export default function Ameria71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-custom-map-servers" />;
}
