import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-online');
}

export default function TopOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-online" />;
}
