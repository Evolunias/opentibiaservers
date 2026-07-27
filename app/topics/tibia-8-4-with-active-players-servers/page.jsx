import Tibia84WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-8-4-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithActivePlayersServersKeywordPage />;
}
