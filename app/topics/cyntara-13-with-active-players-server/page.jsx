import Cyntara13WithActivePlayersServerKeywordPage, { generateMetadata } from './cyntara-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13WithActivePlayersServerKeywordPage />;
}
