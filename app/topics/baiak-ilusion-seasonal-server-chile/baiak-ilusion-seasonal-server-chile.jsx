import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-seasonal-server-chile');
}

export default function BaiakIlusionSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-seasonal-server-chile" />;
}
