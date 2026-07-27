import Tibia12WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithActivePlayersServerKeywordPage />;
}
