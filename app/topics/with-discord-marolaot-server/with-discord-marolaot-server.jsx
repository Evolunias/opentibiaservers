import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-server');
}

export default function WithDiscordMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-server" />;
}
