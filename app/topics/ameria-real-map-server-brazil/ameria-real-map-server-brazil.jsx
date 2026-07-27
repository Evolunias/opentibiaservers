import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-brazil');
}

export default function AmeriaRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-brazil" />;
}
