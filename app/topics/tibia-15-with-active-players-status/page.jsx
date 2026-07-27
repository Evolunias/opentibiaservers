import Tibia15WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-15-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersStatusKeywordPage />;
}
