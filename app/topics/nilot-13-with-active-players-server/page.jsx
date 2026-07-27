import Nilot13WithActivePlayersServerKeywordPage, { generateMetadata } from './nilot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot13WithActivePlayersServerKeywordPage />;
}
