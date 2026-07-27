import Coxaot15WithActivePlayersServerKeywordPage, { generateMetadata } from './coxaot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15WithActivePlayersServerKeywordPage />;
}
