import Oxygenot15WithActivePlayersServerKeywordPage, { generateMetadata } from './oxygenot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oxygenot15WithActivePlayersServerKeywordPage />;
}
