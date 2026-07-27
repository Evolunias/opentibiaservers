import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-brazil');
}

export default function TibiameRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-brazil" />;
}
