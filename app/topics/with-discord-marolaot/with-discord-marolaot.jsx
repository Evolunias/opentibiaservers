import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot');
}

export default function WithDiscordMarolaotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot" />;
}
