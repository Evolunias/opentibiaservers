import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-wiki');
}

export default function WithDiscordMarolaotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-wiki" />;
}
