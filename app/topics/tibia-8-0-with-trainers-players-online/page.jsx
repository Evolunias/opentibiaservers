import Tibia80WithTrainersPlayersOnlineKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersPlayersOnlineKeywordPage />;
}
