import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-chile');
}

export default function WithDiscordPlayersOnlineChileKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-chile" />;
}
