import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-online');
}

export default function TopVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-online" />;
}
