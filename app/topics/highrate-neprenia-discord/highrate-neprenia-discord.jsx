import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-discord');
}

export default function HighrateNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-discord" />;
}
