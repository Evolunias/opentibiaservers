import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-real-map-servers');
}

export default function Ameria12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-real-map-servers" />;
}
