import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-discord');
}

export default function CurrentOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-discord" />;
}
