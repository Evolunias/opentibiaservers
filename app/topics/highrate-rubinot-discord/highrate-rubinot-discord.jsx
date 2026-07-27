import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-discord');
}

export default function HighrateRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-discord" />;
}
