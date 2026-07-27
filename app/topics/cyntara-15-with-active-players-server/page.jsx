import Cyntara15WithActivePlayersServerKeywordPage, { generateMetadata } from './cyntara-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15WithActivePlayersServerKeywordPage />;
}
