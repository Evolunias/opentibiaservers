import Oldera81WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera81WithActivePlayersServerKeywordPage />;
}
