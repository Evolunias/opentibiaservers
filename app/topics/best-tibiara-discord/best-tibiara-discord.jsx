import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-discord');
}

export default function BestTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-discord" />;
}
