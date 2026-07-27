import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-madnessalive-online');
}

export default function HighrateMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-madnessalive-online" />;
}
