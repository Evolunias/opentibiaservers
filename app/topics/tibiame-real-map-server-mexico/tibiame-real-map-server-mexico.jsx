import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-mexico');
}

export default function TibiameRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-mexico" />;
}
