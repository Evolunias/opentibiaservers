import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-discord-chile');
}

export default function PvpDiscordChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-discord-chile" />;
}
