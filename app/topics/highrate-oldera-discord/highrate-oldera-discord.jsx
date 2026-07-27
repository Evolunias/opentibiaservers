import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-discord');
}

export default function HighrateOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-discord" />;
}
