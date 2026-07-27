import Tibia80WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-8-0-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithActivePlayersServersKeywordPage />;
}
