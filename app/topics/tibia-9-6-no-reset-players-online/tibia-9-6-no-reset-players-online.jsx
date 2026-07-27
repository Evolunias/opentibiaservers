import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-no-reset-players-online');
}

export default function Tibia96NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-no-reset-players-online" />;
}
