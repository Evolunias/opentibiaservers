import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-with-trainers-players-online');
}

export default function Tibia14WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-with-trainers-players-online" />;
}
