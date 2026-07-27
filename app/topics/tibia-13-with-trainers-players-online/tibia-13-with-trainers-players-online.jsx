import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-with-trainers-players-online');
}

export default function Tibia13WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-with-trainers-players-online" />;
}
