import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-real-map-server');
}

export default function Ameria100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-real-map-server" />;
}
