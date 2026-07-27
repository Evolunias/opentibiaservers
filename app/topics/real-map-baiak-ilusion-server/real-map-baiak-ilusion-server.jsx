import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-server');
}

export default function RealMapBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-server" />;
}
