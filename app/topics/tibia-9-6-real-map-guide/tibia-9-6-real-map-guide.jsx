import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-guide');
}

export default function Tibia96RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-guide" />;
}
