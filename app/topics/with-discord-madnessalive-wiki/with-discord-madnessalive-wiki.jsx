import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-wiki');
}

export default function WithDiscordMadnessaliveWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-wiki" />;
}
