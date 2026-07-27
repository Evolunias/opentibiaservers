import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eternal-odyssey-discord');
}

export default function TopEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-eternal-odyssey-discord" />;
}
