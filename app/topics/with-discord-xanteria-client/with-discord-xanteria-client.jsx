import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-client');
}

export default function WithDiscordXanteriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-client" />;
}
