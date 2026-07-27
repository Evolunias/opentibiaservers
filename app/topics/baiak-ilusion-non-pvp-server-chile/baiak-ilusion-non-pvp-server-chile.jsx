import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-non-pvp-server-chile');
}

export default function BaiakIlusionNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-non-pvp-server-chile" />;
}
