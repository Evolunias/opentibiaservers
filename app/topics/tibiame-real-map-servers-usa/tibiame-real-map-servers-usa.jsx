import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-servers-usa');
}

export default function TibiameRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-servers-usa" />;
}
