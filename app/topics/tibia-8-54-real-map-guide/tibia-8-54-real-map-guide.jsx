import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-real-map-guide');
}

export default function Tibia854RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-real-map-guide" />;
}
