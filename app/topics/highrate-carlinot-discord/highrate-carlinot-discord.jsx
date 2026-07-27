import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-carlinot-discord');
}

export default function HighrateCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-carlinot-discord" />;
}
