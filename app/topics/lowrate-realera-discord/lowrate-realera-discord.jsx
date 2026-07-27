import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-discord');
}

export default function LowrateRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-discord" />;
}
