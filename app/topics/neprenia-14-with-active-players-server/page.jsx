import Neprenia14WithActivePlayersServerKeywordPage, { generateMetadata } from './neprenia-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14WithActivePlayersServerKeywordPage />;
}
