import Tibia15WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-15-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersSeasonKeywordPage />;
}
