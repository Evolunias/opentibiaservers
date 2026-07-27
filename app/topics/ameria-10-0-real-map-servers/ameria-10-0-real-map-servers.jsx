import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-real-map-servers');
}

export default function Ameria100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-real-map-servers" />;
}
