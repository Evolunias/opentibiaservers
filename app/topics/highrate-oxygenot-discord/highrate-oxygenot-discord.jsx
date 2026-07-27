import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-discord');
}

export default function HighrateOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-discord" />;
}
