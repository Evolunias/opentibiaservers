import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-blazera-online');
}

export default function ActiveBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-blazera-online" />;
}
