import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-europe');
}

export default function WithDiscordWikiEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-europe" />;
}
