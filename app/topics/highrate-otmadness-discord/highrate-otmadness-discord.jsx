import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-discord');
}

export default function HighrateOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-discord" />;
}
