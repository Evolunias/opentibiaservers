import Nilot11WithActivePlayersServerKeywordPage, { generateMetadata } from './nilot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot11WithActivePlayersServerKeywordPage />;
}
