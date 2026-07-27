import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-wiki');
}

export default function WithDiscordYurotsWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-wiki" />;
}
