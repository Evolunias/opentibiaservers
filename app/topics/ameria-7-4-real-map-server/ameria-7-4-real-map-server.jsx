import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-real-map-server');
}

export default function Ameria74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-real-map-server" />;
}
