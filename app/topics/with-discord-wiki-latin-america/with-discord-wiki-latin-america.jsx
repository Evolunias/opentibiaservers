import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-latin-america');
}

export default function WithDiscordWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-latin-america" />;
}
