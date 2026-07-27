import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-guide');
}

export default function Tibia71CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-guide" />;
}
