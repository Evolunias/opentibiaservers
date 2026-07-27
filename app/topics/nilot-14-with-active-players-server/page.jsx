import Nilot14WithActivePlayersServerKeywordPage, { generateMetadata } from './nilot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot14WithActivePlayersServerKeywordPage />;
}
