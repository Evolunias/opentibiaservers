import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-wiki');
}

export default function WithDiscordTibiascapeWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-wiki" />;
}
