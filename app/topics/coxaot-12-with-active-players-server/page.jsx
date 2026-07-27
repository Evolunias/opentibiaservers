import Coxaot12WithActivePlayersServerKeywordPage, { generateMetadata } from './coxaot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12WithActivePlayersServerKeywordPage />;
}
