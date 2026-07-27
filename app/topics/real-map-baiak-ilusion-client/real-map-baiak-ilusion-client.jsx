import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-client');
}

export default function RealMapBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-client" />;
}
