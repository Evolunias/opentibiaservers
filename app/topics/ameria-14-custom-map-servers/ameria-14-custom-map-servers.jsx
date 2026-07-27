import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-custom-map-servers');
}

export default function Ameria14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-custom-map-servers" />;
}
