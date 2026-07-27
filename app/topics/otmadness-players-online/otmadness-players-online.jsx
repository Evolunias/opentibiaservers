import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-players-online');
}

export default function OtmadnessPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="otmadness-players-online" />;
}
