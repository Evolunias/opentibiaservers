import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-uk');
}

export default function TibiameRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-uk" />;
}
