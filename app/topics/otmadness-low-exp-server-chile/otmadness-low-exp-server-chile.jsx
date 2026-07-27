import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-low-exp-server-chile');
}

export default function OtmadnessLowExpServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-low-exp-server-chile" />;
}
