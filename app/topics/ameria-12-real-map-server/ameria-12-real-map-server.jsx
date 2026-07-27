import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-real-map-server');
}

export default function Ameria12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-real-map-server" />;
}
