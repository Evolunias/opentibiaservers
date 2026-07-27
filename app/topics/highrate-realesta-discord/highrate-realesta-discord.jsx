import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realesta-discord');
}

export default function HighrateRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-realesta-discord" />;
}
