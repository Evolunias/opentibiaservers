import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-private-server');
}

export default function WithDiscordYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-private-server" />;
}
