import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-guide');
}

export default function Tibia11CustomMapGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-guide" />;
}
