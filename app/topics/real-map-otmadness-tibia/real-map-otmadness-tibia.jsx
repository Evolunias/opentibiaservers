import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-otmadness-tibia');
}

export default function RealMapOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-otmadness-tibia" />;
}
