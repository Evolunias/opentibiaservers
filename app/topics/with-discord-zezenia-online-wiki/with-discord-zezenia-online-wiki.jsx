import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zezenia-online-wiki');
}

export default function WithDiscordZezeniaOnlineWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zezenia-online-wiki" />;
}
