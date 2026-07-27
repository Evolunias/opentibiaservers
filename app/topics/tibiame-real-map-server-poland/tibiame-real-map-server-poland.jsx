import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-poland');
}

export default function TibiameRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-poland" />;
}
