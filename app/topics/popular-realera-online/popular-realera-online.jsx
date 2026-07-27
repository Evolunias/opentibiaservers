import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-online');
}

export default function PopularRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-online" />;
}
