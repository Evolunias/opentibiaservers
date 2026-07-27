import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiara-online');
}

export default function BestTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-tibiara-online" />;
}
