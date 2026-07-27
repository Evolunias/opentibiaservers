import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-wiki');
}

export default function WithDiscordNtoStarWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-wiki" />;
}
