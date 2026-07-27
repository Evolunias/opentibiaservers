import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-discord');
}

export default function HighrateEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-discord" />;
}
