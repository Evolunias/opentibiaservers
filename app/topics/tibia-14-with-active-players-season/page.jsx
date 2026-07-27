import Tibia14WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-14-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersSeasonKeywordPage />;
}
