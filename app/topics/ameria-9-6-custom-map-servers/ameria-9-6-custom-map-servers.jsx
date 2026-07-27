import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-custom-map-servers');
}

export default function Ameria96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-custom-map-servers" />;
}
