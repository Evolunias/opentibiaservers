import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-discord-chile');
}

export default function PvpEnforcedDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-discord-chile" />;
}
