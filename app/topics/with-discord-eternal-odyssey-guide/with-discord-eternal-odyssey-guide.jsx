import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eternal-odyssey-guide');
}

export default function WithDiscordEternalOdysseyGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eternal-odyssey-guide" />;
}
