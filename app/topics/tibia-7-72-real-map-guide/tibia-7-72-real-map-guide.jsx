import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-real-map-guide');
}

export default function Tibia772RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-real-map-guide" />;
}
