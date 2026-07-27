import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-online');
}

export default function HighrateNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-online" />;
}
