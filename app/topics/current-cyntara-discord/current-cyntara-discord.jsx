import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-discord');
}

export default function CurrentCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-discord" />;
}
