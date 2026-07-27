import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-wiki-germany');
}

export default function WithDiscordWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-wiki-germany" />;
}
