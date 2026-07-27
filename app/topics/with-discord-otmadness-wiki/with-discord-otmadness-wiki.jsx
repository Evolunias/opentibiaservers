import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-wiki');
}

export default function WithDiscordOtmadnessWikiKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-wiki" />;
}
