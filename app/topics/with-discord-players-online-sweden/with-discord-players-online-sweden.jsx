import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-players-online-sweden');
}

export default function WithDiscordPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-players-online-sweden" />;
}
