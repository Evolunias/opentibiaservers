import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-guide');
}

export default function WithDiscordMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-guide" />;
}
