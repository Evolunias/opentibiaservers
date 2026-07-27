import Tibia96WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersSeasonKeywordPage />;
}
