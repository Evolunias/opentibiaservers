import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-private-server');
}

export default function WithDiscordUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-private-server" />;
}
