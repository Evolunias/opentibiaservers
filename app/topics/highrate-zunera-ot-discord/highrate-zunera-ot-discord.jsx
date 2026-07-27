import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-zunera-ot-discord');
}

export default function HighrateZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-zunera-ot-discord" />;
}
