import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-players-online');
}

export default function Tibia12BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-players-online" />;
}
