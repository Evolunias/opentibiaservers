import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-custom-map-guide');
}

export default function Tibia84CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-custom-map-guide" />;
}
