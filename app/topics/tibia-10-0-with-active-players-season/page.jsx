import Tibia100WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersSeasonKeywordPage />;
}
