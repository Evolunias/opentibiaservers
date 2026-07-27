import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-real-map-servers');
}

export default function Ameria13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-real-map-servers" />;
}
