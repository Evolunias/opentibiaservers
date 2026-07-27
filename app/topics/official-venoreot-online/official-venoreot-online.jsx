import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-online');
}

export default function OfficialVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-online" />;
}
