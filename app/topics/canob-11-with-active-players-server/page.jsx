import Canob11WithActivePlayersServerKeywordPage, { generateMetadata } from './canob-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11WithActivePlayersServerKeywordPage />;
}
