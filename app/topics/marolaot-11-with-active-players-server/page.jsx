import Marolaot11WithActivePlayersServerKeywordPage, { generateMetadata } from './marolaot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot11WithActivePlayersServerKeywordPage />;
}
