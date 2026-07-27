import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-online');
}

export default function PopularCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-online" />;
}
