import Tibia12WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-12-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersStatusKeywordPage />;
}
