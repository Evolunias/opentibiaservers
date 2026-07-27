import Tibia81WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersSeasonKeywordPage />;
}
