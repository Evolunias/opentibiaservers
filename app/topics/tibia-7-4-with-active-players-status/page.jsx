import Tibia74WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-7-4-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74WithActivePlayersStatusKeywordPage />;
}
