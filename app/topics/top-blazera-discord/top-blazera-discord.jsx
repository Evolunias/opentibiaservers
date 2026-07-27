import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-discord');
}

export default function TopBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-discord" />;
}
