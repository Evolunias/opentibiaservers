import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-wiki');
}

export default function WithDiscordTibiameWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-wiki" />;
}
