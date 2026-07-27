import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eternal-odyssey-discord');
}

export default function CurrentEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-eternal-odyssey-discord" />;
}
