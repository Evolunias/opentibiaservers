import Tibia100WithActivePlayersServerKeywordPage, { generateMetadata } from './tibia-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithActivePlayersServerKeywordPage />;
}
