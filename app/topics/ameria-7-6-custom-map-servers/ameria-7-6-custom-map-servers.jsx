import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-custom-map-servers');
}

export default function Ameria76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-custom-map-servers" />;
}
