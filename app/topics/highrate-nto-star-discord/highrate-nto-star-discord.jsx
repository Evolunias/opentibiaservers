import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nto-star-discord');
}

export default function HighrateNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-nto-star-discord" />;
}
