import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-real-map-servers');
}

export default function Ameria11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-real-map-servers" />;
}
