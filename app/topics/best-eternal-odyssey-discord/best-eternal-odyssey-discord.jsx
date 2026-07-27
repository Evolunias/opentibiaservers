import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eternal-odyssey-discord');
}

export default function BestEternalOdysseyDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-eternal-odyssey-discord" />;
}
