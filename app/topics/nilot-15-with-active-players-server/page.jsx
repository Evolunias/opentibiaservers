import Nilot15WithActivePlayersServerKeywordPage, { generateMetadata } from './nilot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot15WithActivePlayersServerKeywordPage />;
}
