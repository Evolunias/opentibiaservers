import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-discord');
}

export default function HighrateEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-discord" />;
}
