import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-online');
}

export default function HighrateElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-online" />;
}
