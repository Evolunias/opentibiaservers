import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-private-server');
}

export default function WithDiscordImperianicPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-private-server" />;
}
