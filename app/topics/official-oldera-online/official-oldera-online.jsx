import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-online');
}

export default function OfficialOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-online" />;
}
