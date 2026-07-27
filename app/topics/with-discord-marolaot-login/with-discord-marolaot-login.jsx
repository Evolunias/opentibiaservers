import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-login');
}

export default function WithDiscordMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-login" />;
}
