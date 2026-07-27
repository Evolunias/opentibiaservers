import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-online');
}

export default function HighrateOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-online" />;
}
