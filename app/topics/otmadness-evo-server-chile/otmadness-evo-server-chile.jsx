import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-chile');
}

export default function OtmadnessEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-chile" />;
}
