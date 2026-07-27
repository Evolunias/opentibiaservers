import Tibia12WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-12-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersSeasonKeywordPage />;
}
