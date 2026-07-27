import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-non-pvp-server-chile');
}

export default function RuthlessChaosNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-non-pvp-server-chile" />;
}
