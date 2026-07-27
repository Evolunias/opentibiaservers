import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-wiki');
}

export default function WithDiscordCanobWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-wiki" />;
}
