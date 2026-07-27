import Tibia15WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-15-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithActivePlayersServersKeywordPage />;
}
