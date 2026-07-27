import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-online');
}

export default function HighrateRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-online" />;
}
