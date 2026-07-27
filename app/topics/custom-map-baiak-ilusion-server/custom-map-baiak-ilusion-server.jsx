import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-baiak-ilusion-server');
}

export default function CustomMapBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-baiak-ilusion-server" />;
}
