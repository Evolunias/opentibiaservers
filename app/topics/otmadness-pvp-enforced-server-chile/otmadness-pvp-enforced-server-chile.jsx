import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-enforced-server-chile');
}

export default function OtmadnessPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-enforced-server-chile" />;
}
