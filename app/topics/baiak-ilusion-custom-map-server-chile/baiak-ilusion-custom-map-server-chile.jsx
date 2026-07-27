import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-custom-map-server-chile');
}

export default function BaiakIlusionCustomMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-custom-map-server-chile" />;
}
