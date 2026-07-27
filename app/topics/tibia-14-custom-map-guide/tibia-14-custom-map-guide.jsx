import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-guide');
}

export default function Tibia14CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-guide" />;
}
