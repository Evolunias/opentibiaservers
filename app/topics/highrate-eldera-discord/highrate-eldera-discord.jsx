import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-discord');
}

export default function HighrateElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-discord" />;
}
