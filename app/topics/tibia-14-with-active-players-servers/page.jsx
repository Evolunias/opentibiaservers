import Tibia14WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-14-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithActivePlayersServersKeywordPage />;
}
