import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-venoreot-online');
}

export default function BestVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-venoreot-online" />;
}
