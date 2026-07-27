import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-online');
}

export default function TopCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-canob-online" />;
}
