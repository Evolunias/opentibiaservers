import Tibia96WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersStatusKeywordPage />;
}
