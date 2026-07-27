import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-online');
}

export default function FreshStartVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-online" />;
}
