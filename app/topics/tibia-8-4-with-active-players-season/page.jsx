import Tibia84WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersSeasonKeywordPage />;
}
