import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-evo-server-chile');
}

export default function RuthlessChaosEvoServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-evo-server-chile" />;
}
