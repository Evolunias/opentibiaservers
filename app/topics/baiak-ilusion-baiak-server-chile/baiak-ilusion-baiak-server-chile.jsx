import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-baiak-server-chile');
}

export default function BaiakIlusionBaiakServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-baiak-server-chile" />;
}
