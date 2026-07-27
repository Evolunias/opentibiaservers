import Tibia81WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersStatusKeywordPage />;
}
