import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-real-map-server-germany');
}

export default function TibiameRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-real-map-server-germany" />;
}
