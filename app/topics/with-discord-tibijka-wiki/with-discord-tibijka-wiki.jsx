import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-wiki');
}

export default function WithDiscordTibijkaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-wiki" />;
}
