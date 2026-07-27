import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-discord');
}

export default function CurrentRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-realera-discord" />;
}
