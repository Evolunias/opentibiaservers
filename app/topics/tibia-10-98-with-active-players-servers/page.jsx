import Tibia1098WithActivePlayersServersKeywordPage, { generateMetadata } from './tibia-10-98-with-active-players-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithActivePlayersServersKeywordPage />;
}
