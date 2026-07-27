import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-retro-server-chile');
}

export default function BaiakIlusionRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-retro-server-chile" />;
}
