import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-discord');
}

export default function FreshStartOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-discord" />;
}
