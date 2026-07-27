import Tibia96WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-9-6-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithActivePlayersServersKeywordPage />;
}
