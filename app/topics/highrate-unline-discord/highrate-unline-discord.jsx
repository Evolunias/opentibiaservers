import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-discord');
}

export default function HighrateUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-discord" />;
}
