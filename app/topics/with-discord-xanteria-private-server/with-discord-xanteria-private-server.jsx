import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-private-server');
}

export default function WithDiscordXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-private-server" />;
}
