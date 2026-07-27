import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-online');
}

export default function HighrateOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-online" />;
}
