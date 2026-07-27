import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-mist-of-death-wiki');
}

export default function WithDiscordMistOfDeathWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-mist-of-death-wiki" />;
}
