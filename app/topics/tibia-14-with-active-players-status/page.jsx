import Tibia14WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-14-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersStatusKeywordPage />;
}
