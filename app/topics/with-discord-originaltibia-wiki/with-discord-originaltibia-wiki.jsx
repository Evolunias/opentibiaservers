import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-wiki');
}

export default function WithDiscordOriginaltibiaWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-wiki" />;
}
