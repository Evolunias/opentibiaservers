import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-online');
}

export default function HighrateEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-online" />;
}
