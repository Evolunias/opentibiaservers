import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-otmadness-discord');
}

export default function WithDiscordOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-otmadness-discord" />;
}
