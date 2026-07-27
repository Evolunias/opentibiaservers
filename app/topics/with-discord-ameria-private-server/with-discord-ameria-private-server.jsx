import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-private-server');
}

export default function WithDiscordAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-private-server" />;
}
