import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-with-trainers-players-online');
}

export default function Tibia74WithTrainersPlayersOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-with-trainers-players-online" />;
}
