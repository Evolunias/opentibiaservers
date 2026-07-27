import Tibia11WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-11-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersPlayersOnlineKeywordPage />;
}
