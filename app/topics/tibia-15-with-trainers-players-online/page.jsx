import Tibia15WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-15-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersPlayersOnlineKeywordPage />;
}
