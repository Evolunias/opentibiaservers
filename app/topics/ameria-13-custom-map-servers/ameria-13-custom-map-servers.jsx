import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-custom-map-servers');
}

export default function Ameria13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-custom-map-servers" />;
}
