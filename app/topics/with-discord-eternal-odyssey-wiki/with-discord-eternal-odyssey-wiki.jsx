import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-wiki');
}

export default function WithDiscordEternalOdysseyWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-wiki" />;
}
