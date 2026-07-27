import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-poland');
}

export default function WithDiscordWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-poland" />;
}
