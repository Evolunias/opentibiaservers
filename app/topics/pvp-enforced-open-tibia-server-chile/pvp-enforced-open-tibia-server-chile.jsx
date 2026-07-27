import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-open-tibia-server-chile');
}

export default function PvpEnforcedOpenTibiaServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-open-tibia-server-chile" />;
}
