import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-oldera-discord');
}

export default function CurrentOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-oldera-discord" />;
}
