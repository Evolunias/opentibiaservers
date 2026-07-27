import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-online');
}

export default function NewVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-online" />;
}
