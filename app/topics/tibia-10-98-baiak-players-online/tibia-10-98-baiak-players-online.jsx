import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-players-online');
}

export default function Tibia1098BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-players-online" />;
}
