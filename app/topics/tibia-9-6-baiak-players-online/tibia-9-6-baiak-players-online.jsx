import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-players-online');
}

export default function Tibia96BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-players-online" />;
}
