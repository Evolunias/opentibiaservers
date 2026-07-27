import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-online');
}

export default function OfficialRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-realera-online" />;
}
