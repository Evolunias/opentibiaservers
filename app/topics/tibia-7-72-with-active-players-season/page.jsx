import Tibia772WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersSeasonKeywordPage />;
}
