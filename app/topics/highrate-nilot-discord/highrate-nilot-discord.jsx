import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-discord');
}

export default function HighrateNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-discord" />;
}
