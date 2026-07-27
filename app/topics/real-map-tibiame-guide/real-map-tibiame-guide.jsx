import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-guide');
}

export default function RealMapTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-guide" />;
}
