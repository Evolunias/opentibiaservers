import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-originaltibia-discord');
}

export default function HighrateOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-originaltibia-discord" />;
}
