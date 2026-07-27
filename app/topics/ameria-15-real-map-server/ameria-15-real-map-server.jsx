import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-real-map-server');
}

export default function Ameria15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-real-map-server" />;
}
