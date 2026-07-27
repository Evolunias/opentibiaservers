import Marolaot12WithActivePlayersServerKeywordPage, { generateMetadata } from './marolaot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Marolaot12WithActivePlayersServerKeywordPage />;
}
