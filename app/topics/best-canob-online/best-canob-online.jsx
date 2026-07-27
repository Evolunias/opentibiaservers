import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-online');
}

export default function BestCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-canob-online" />;
}
