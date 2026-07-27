import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-venoreot-online');
}

export default function LowrateVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-venoreot-online" />;
}
