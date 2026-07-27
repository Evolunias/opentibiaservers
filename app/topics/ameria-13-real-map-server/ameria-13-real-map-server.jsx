import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-real-map-server');
}

export default function Ameria13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-real-map-server" />;
}
