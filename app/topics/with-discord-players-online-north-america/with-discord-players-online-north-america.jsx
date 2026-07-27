import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-north-america');
}

export default function WithDiscordPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-north-america" />;
}
