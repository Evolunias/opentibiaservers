import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiara-online');
}

export default function TopTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibiara-online" />;
}
