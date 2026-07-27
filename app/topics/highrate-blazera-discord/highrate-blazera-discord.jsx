import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-discord');
}

export default function HighrateBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-discord" />;
}
