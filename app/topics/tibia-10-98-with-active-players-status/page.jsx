import Tibia1098WithActivePlayersStatusKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersStatusKeywordPage />;
}
