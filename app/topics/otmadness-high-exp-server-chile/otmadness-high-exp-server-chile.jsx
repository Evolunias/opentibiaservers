import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-high-exp-server-chile');
}

export default function OtmadnessHighExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-high-exp-server-chile" />;
}
