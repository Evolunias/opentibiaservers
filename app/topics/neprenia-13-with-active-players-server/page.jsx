import Neprenia13WithActivePlayersServerKeywordPage, { generateMetadata } from './neprenia-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13WithActivePlayersServerKeywordPage />;
}
