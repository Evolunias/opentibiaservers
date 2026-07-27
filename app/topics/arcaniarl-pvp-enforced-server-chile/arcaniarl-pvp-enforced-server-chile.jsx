import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-chile');
}

export default function ArcaniarlPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-chile" />;
}
