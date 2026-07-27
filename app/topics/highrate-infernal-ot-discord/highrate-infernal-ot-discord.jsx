import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-infernal-ot-discord');
}

export default function HighrateInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-infernal-ot-discord" />;
}
