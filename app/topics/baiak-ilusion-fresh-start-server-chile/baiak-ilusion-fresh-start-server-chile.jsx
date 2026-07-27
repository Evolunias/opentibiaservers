import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-fresh-start-server-chile');
}

export default function BaiakIlusionFreshStartServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-fresh-start-server-chile" />;
}
