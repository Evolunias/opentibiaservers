import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-baiak-ilusion-servers');
}

export default function CustomMapBaiakIlusionServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-baiak-ilusion-servers" />;
}
