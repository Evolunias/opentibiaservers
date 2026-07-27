import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-custom-map-guide');
}

export default function Tibia86CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-custom-map-guide" />;
}
