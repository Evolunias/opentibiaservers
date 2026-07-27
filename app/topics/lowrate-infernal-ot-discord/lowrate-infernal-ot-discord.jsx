import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-infernal-ot-discord');
}

export default function LowrateInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-infernal-ot-discord" />;
}
