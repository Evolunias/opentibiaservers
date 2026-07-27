import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-discord');
}

export default function NewOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-discord" />;
}
