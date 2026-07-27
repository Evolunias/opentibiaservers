import Neprenia12WithActivePlayersServerKeywordPage, { generateMetadata } from './neprenia-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12WithActivePlayersServerKeywordPage />;
}
