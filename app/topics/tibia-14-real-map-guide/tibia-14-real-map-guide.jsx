import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-guide');
}

export default function Tibia14RealMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-guide" />;
}
