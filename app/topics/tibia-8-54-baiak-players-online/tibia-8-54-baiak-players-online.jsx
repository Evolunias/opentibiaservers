import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-players-online');
}

export default function Tibia854BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-players-online" />;
}
