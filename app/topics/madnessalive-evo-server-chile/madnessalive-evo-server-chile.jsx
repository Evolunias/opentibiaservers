import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-chile');
}

export default function MadnessaliveEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-chile" />;
}
