import Tibia12WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-12-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersPlayersOnlineKeywordPage />;
}
