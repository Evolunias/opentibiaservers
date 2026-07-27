import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-online');
}

export default function ActiveVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-online" />;
}
