import Coxaot14WithActivePlayersServerKeywordPage, { generateMetadata } from './coxaot-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14WithActivePlayersServerKeywordPage />;
}
