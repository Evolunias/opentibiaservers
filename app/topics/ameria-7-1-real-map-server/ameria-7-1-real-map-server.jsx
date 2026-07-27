import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-real-map-server');
}

export default function Ameria71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-real-map-server" />;
}
