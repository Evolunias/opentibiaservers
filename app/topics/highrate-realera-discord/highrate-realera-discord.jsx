import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-discord');
}

export default function HighrateRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-discord" />;
}
