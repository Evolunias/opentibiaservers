import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-online');
}

export default function CurrentCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-canob-online" />;
}
