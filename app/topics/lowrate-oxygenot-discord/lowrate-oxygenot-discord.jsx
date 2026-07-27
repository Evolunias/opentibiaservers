import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-discord');
}

export default function LowrateOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-discord" />;
}
