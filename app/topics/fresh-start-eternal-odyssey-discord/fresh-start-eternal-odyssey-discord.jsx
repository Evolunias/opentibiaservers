import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eternal-odyssey-discord');
}

export default function FreshStartEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eternal-odyssey-discord" />;
}
