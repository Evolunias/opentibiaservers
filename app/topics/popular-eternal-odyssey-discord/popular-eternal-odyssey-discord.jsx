import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-discord');
}

export default function PopularEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-discord" />;
}
