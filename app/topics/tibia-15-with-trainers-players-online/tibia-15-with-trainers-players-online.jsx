import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-with-trainers-players-online');
}

export default function Tibia15WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-with-trainers-players-online" />;
}
