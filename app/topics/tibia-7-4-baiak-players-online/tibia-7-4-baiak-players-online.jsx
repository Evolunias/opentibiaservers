import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-players-online');
}

export default function Tibia74BaiakPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-players-online" />;
}
