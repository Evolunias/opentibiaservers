import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-online');
}

export default function HighrateYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-online" />;
}
