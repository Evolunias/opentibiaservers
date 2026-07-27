import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-discord');
}

export default function CustomOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-discord" />;
}
