import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-real-map-guide');
}

export default function Tibia76RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-real-map-guide" />;
}
