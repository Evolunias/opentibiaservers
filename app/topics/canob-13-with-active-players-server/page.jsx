import Canob13WithActivePlayersServerKeywordPage, { generateMetadata } from './canob-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13WithActivePlayersServerKeywordPage />;
}
