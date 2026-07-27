import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-discord');
}

export default function HighrateArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-discord" />;
}
