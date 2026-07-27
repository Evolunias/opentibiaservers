import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-pvp-server-chile');
}

export default function OtmadnessPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-pvp-server-chile" />;
}
