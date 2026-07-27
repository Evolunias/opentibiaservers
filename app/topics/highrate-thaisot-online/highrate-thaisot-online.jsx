import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-online');
}

export default function HighrateThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-online" />;
}
