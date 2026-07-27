import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-discord');
}

export default function BestBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-discord" />;
}
