import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-online');
}

export default function ReneraOnlineKeywordPage() {
  return <StaticKeywordPage slug="renera-online" />;
}
