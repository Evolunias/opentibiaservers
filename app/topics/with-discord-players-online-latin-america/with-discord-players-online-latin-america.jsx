import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-latin-america');
}

export default function WithDiscordPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-latin-america" />;
}
