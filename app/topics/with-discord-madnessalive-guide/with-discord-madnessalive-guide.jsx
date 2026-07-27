import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-madnessalive-guide');
}

export default function WithDiscordMadnessaliveGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-madnessalive-guide" />;
}
