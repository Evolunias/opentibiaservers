import Tibia12WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-12-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersServersKeywordPage />;
}
