import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-server');
}

export default function WithDiscordCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-server" />;
}
