import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-wiki');
}

export default function WithDiscordRubinotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-wiki" />;
}
