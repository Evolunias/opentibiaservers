import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-online');
}

export default function BestBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-online" />;
}
