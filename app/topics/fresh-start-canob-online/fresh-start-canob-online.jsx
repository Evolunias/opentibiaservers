import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-online');
}

export default function FreshStartCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-online" />;
}
