import Tibia80WithActivePlayersSeasonKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersSeasonKeywordPage />;
}
