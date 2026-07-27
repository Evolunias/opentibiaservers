import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-online');
}

export default function PopularBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-online" />;
}
