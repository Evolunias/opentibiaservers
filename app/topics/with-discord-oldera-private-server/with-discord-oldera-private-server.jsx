import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-private-server');
}

export default function WithDiscordOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-private-server" />;
}
