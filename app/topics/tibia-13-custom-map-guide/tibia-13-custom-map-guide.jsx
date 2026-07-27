import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-guide');
}

export default function Tibia13CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-guide" />;
}
