import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-realera-online');
}

export default function HighrateRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-realera-online" />;
}
