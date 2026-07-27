import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-wiki');
}

export default function WithDiscordThorniaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-wiki" />;
}
