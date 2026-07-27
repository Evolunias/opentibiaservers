import Coxaot13WithActivePlayersServerKeywordPage, { generateMetadata } from './coxaot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13WithActivePlayersServerKeywordPage />;
}
