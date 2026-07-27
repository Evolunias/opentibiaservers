import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-tibia');
}

export default function RealMapBaiakIlusionTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-tibia" />;
}
