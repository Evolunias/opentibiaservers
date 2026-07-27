import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-online');
}

export default function PopularVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-online" />;
}
