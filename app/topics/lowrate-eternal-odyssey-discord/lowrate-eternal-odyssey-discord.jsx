import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eternal-odyssey-discord');
}

export default function LowrateEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eternal-odyssey-discord" />;
}
