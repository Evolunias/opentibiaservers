import Tibia11WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-11-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithActivePlayersServersKeywordPage />;
}
