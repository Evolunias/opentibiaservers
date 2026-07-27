import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-mexico');
}

export default function WithDiscordWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-mexico" />;
}
