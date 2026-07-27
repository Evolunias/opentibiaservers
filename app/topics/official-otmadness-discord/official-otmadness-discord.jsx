import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-discord');
}

export default function OfficialOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-discord" />;
}
