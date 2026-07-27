import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-discord');
}

export default function NoResetOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-discord" />;
}
