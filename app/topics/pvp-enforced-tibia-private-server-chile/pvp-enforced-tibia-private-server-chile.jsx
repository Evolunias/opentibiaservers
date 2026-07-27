import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-tibia-private-server-chile');
}

export default function PvpEnforcedTibiaPrivateServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-tibia-private-server-chile" />;
}
