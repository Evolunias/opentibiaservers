import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-online');
}

export default function TopOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-online" />;
}
