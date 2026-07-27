import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-discord');
}

export default function CurrentTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-discord" />;
}
