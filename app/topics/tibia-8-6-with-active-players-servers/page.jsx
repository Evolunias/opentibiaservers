import Tibia86WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-8-6-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithActivePlayersServersKeywordPage />;
}
