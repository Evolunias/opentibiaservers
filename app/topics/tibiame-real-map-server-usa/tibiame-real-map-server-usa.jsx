import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-usa');
}

export default function TibiameRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-usa" />;
}
