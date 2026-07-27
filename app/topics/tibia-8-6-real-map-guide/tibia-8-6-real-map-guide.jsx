import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-guide');
}

export default function Tibia86RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-guide" />;
}
