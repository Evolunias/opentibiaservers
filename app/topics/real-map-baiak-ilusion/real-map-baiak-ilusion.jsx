import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion');
}

export default function RealMapBaiakIlusionKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion" />;
}
