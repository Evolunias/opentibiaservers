import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-online');
}

export default function OfficialBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-online" />;
}
