import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-calmera-ot-discord');
}

export default function HighrateCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-calmera-ot-discord" />;
}
