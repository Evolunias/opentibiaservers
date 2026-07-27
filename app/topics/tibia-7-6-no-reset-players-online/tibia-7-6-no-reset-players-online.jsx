import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-players-online');
}

export default function Tibia76NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-players-online" />;
}
