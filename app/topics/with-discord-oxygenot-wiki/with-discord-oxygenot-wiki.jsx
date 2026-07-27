import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-wiki');
}

export default function WithDiscordOxygenotWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-wiki" />;
}
