import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-zezenia-online-guide');
}

export default function RealMapZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-zezenia-online-guide" />;
}
