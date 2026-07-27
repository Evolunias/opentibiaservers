import Coxaot11WithActivePlayersServerKeywordPage, { generateMetadata } from './coxaot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11WithActivePlayersServerKeywordPage />;
}
