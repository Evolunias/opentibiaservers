import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-custom-map-servers');
}

export default function Ameria12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-custom-map-servers" />;
}
