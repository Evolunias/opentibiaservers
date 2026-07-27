import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classick-drakoria-discord');
}

export default function HighrateClassickDrakoriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-classick-drakoria-discord" />;
}
