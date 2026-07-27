import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-venoreot-online');
}

export default function OldSchoolVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="old-school-venoreot-online" />;
}
