import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-discord');
}

export default function HighrateThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-discord" />;
}
