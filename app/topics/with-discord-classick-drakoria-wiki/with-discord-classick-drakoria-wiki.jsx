import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-wiki');
}

export default function WithDiscordClassickDrakoriaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-wiki" />;
}
