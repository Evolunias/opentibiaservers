import Cyntara11WithActivePlayersServerKeywordPage, { generateMetadata } from './cyntara-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11WithActivePlayersServerKeywordPage />;
}
