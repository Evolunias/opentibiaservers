import Tibia13WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-13-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithActivePlayersServersKeywordPage />;
}
