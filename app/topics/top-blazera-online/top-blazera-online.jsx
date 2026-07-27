import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-online');
}

export default function TopBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-online" />;
}
