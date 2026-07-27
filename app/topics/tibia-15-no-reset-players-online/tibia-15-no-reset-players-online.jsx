import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-players-online');
}

export default function Tibia15NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-players-online" />;
}
