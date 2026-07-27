import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-archlight-online');
}

export default function HighrateArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-archlight-online" />;
}
