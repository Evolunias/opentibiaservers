import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-players-online');
}

export default function Tibia81BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-players-online" />;
}
