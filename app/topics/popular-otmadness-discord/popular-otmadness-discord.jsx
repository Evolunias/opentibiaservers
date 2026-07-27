import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-discord');
}

export default function PopularOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-discord" />;
}
