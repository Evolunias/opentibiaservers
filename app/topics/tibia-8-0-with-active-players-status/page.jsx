import Tibia80WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersStatusKeywordPage />;
}
