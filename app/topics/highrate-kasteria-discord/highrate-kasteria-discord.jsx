import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-discord');
}

export default function HighrateKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-discord" />;
}
