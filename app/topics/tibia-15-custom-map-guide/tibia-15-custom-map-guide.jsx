import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-custom-map-guide');
}

export default function Tibia15CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-custom-map-guide" />;
}
