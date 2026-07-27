import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-discord');
}

export default function TopOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-discord" />;
}
