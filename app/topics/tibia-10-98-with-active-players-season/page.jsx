import Tibia1098WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersSeasonKeywordPage />;
}
