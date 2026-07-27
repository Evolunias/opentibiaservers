import Tibia772WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-7-72-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithActivePlayersStatusKeywordPage />;
}
