import Tibia100WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersServersKeywordPage />;
}
