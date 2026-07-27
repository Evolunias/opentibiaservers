import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-private-server');
}

export default function WithDiscordNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-private-server" />;
}
