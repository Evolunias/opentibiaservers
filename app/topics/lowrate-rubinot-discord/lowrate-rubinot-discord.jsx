import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rubinot-discord');
}

export default function LowrateRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rubinot-discord" />;
}
