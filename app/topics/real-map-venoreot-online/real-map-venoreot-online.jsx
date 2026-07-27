import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-online');
}

export default function RealMapVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-online" />;
}
