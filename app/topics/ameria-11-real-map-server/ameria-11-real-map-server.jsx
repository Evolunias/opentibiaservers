import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-real-map-server');
}

export default function Ameria11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-real-map-server" />;
}
