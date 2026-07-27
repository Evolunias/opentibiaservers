import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-wiki');
}

export default function WithDiscordMiracleWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-wiki" />;
}
