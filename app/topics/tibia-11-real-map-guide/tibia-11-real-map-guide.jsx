import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-guide');
}

export default function Tibia11RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-guide" />;
}
