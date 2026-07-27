import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiara-online');
}

export default function ActiveTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-tibiara-online" />;
}
