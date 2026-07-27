import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-custom-map-servers');
}

export default function Ameria11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-custom-map-servers" />;
}
