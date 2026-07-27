import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-with-trainers-players-online');
}

export default function Tibia96WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-with-trainers-players-online" />;
}
