import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-online');
}

export default function PopularTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-online" />;
}
