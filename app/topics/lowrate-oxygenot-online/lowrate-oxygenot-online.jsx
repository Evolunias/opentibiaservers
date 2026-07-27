import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-online');
}

export default function LowrateOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-online" />;
}
