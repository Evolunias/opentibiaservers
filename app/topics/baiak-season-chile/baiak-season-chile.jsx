import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-season-chile');
}

export default function BaiakSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-season-chile" />;
}
