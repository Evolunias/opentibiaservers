import Nilot12WithActivePlayersServerKeywordPage, { generateMetadata } from './nilot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Nilot12WithActivePlayersServerKeywordPage />;
}
