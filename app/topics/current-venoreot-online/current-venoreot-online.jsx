import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-online');
}

export default function CurrentVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-online" />;
}
