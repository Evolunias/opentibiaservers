import Tibia13WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-13-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersPlayersOnlineKeywordPage />;
}
