import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eternal-odyssey-discord');
}

export default function HighrateEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-eternal-odyssey-discord" />;
}
