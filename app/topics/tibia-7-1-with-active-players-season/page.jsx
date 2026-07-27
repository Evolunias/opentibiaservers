import Tibia71WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-7-1-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithActivePlayersSeasonKeywordPage />;
}
