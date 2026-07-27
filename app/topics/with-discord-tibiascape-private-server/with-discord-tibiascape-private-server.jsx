import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-private-server');
}

export default function WithDiscordTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-private-server" />;
}
