import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-online');
}

export default function NoResetVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-online" />;
}
