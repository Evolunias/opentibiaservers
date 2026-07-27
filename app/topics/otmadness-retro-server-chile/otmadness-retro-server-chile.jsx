import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-retro-server-chile');
}

export default function OtmadnessRetroServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-retro-server-chile" />;
}
