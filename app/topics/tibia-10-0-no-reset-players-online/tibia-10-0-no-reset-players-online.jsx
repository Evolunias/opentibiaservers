import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-no-reset-players-online');
}

export default function Tibia100NoResetPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-no-reset-players-online" />;
}
