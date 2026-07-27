import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-custom-map-servers');
}

export default function Ameria84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-custom-map-servers" />;
}
