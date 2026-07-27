import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-discord');
}

export default function HighrateThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-discord" />;
}
