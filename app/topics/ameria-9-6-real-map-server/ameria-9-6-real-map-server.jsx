import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-9-6-real-map-server');
}

export default function Ameria96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-9-6-real-map-server" />;
}
