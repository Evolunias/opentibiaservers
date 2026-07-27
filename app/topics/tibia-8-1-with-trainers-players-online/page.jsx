import Tibia81WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersPlayersOnlineKeywordPage />;
}
