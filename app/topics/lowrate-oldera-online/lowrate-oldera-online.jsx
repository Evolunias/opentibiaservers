import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-online');
}

export default function LowrateOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-online" />;
}
