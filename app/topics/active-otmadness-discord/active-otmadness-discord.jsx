import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-discord');
}

export default function ActiveOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-discord" />;
}
