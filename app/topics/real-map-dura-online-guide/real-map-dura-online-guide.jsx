import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-dura-online-guide');
}

export default function RealMapDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-dura-online-guide" />;
}
