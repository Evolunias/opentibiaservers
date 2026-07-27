import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-6-real-map-server');
}

export default function Ameria76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-6-real-map-server" />;
}
