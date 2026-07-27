import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-with-trainers-players-online');
}

export default function Tibia76WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-with-trainers-players-online" />;
}
