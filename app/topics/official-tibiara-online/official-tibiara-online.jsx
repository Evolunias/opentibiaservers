import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiara-online');
}

export default function OfficialTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-tibiara-online" />;
}
