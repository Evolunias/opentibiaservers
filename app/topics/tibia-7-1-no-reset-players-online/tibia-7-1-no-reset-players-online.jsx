import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-players-online');
}

export default function Tibia71NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-players-online" />;
}
