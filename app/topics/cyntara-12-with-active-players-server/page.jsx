import Cyntara12WithActivePlayersServerKeywordPage, { generateMetadata } from './cyntara-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12WithActivePlayersServerKeywordPage />;
}
