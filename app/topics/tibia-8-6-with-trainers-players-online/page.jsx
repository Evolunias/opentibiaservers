import Tibia86WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersPlayersOnlineKeywordPage />;
}
