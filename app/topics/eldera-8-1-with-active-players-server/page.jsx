import Eldera81WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera81WithActivePlayersServerKeywordPage />;
}
