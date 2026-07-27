import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-private-server');
}

export default function WithDiscordCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-private-server" />;
}
