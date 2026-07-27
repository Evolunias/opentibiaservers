import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-chile');
}

export default function MadnessaliveNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-chile" />;
}
