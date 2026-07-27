import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-discord');
}

export default function BestTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-discord" />;
}
