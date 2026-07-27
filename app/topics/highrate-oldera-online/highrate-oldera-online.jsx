import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-online');
}

export default function HighrateOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-online" />;
}
