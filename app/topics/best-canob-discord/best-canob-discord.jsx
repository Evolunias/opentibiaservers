import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-discord');
}

export default function BestCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-canob-discord" />;
}
