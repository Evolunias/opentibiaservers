import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-discord');
}

export default function BestOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-discord" />;
}
