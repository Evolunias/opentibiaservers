import Tibia100WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersStatusKeywordPage />;
}
