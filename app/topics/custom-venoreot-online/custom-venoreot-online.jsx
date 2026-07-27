import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-online');
}

export default function CustomVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-online" />;
}
