import Tibia86WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersStatusKeywordPage />;
}
