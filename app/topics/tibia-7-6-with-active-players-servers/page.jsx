import Tibia76WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-7-6-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithActivePlayersServersKeywordPage />;
}
