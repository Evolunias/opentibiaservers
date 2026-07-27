import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-custom-map-servers');
}

export default function Ameria15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-custom-map-servers" />;
}
