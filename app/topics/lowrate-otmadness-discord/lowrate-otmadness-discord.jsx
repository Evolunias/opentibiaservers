import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-discord');
}

export default function LowrateOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-discord" />;
}
