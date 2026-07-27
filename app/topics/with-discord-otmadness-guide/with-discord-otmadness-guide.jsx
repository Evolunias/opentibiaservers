import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-guide');
}

export default function WithDiscordOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-guide" />;
}
