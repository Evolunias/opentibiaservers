import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-wiki');
}

export default function WithDiscordRealeraWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-wiki" />;
}
