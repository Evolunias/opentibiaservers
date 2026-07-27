import Marolaot14WithActivePlayersServerKeywordPage, { generateMetadata } from './marolaot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot14WithActivePlayersServerKeywordPage />;
}
