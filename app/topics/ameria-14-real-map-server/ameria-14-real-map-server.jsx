import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-real-map-server');
}

export default function Ameria14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-real-map-server" />;
}
