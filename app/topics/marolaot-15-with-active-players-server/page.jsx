import Marolaot15WithActivePlayersServerKeywordPage, { generateMetadata } from './marolaot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot15WithActivePlayersServerKeywordPage />;
}
