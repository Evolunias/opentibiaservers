import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-guide');
}

export default function Tibia96CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-guide" />;
}
