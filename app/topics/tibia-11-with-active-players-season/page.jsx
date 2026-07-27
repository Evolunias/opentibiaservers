import Tibia11WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-11-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersSeasonKeywordPage />;
}
