import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-private-server');
}

export default function WithDiscordTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-private-server" />;
}
