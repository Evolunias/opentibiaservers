import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-uk');
}

export default function WithDiscordWikiUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-uk" />;
}
