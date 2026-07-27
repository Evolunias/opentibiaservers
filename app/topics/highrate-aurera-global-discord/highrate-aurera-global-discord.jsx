import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-discord');
}

export default function HighrateAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-discord" />;
}
