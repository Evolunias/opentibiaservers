import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-guide-chile');
}

export default function BaiakGuideChileKeywordPage() {
  return <StaticKeywordPage slug="baiak-guide-chile" />;
}
