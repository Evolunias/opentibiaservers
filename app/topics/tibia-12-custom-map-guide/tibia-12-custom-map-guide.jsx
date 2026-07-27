import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-guide');
}

export default function Tibia12CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-guide" />;
}
