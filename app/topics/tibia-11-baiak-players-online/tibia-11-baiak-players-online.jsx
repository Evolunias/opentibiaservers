import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-players-online');
}

export default function Tibia11BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-players-online" />;
}
