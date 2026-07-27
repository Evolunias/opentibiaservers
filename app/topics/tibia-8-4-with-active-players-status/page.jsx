import Tibia84WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersStatusKeywordPage />;
}
