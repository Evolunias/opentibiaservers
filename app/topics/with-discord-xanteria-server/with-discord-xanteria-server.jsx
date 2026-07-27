import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-server');
}

export default function WithDiscordXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-server" />;
}
