import Neprenia96WithActivePlayersServerKeywordPage, { generateMetadata } from './neprenia-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96WithActivePlayersServerKeywordPage />;
}
