import Tibia81WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersServersKeywordPage />;
}
