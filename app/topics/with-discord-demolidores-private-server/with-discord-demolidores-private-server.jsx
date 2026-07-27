import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-private-server');
}

export default function WithDiscordDemolidoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-private-server" />;
}
