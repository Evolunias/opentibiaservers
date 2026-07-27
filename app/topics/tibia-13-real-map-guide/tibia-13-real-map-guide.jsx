import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-guide');
}

export default function Tibia13RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-guide" />;
}
