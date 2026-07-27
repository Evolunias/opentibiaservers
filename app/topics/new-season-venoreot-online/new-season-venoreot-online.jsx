import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-venoreot-online');
}

export default function NewSeasonVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-venoreot-online" />;
}
