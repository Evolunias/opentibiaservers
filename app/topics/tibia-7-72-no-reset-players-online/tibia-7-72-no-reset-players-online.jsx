import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-no-reset-players-online');
}

export default function Tibia772NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-no-reset-players-online" />;
}
