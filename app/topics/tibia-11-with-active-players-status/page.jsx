import Tibia11WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-11-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersStatusKeywordPage />;
}
