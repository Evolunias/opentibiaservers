import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-private-server');
}

export default function WithDiscordMistOfDeathPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-private-server" />;
}
