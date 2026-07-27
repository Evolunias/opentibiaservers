import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-4-real-map-server');
}

export default function Ameria84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-4-real-map-server" />;
}
