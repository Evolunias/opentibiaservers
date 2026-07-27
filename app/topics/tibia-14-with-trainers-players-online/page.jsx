import Tibia14WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-14-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersPlayersOnlineKeywordPage />;
}
