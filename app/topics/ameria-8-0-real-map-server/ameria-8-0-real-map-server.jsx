import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-0-real-map-server');
}

export default function Ameria80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-0-real-map-server" />;
}
