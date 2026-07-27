import Tibia76WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersStatusKeywordPage />;
}
