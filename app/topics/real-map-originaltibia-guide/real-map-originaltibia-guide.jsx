import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-guide');
}

export default function RealMapOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-guide" />;
}
