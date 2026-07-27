import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-guide');
}

export default function RealMapArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-guide" />;
}
