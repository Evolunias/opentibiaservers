import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-non-pvp-server-chile');
}

export default function OtmadnessNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-non-pvp-server-chile" />;
}
