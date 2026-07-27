import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-custom-map-servers');
}

export default function Ameria100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-custom-map-servers" />;
}
