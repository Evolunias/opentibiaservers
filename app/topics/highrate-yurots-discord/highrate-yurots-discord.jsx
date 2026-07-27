import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-discord');
}

export default function HighrateYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-discord" />;
}
