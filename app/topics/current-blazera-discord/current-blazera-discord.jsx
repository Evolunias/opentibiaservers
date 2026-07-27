import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-discord');
}

export default function CurrentBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-discord" />;
}
