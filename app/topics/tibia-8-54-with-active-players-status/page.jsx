import Tibia854WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-8-54-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithActivePlayersStatusKeywordPage />;
}
