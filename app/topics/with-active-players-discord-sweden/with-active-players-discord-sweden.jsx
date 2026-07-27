import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-discord-sweden');
}

export default function WithActivePlayersDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-discord-sweden" />;
}
