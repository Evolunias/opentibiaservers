import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-discord');
}

export default function OtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="otmadness-discord" />;
}
