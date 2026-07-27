import Tibia13WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-13-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersSeasonKeywordPage />;
}
