import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-wiki');
}

export default function WithDiscordRealestaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-wiki" />;
}
