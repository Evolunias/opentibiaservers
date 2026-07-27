import Canob14WithActivePlayersServerKeywordPage, { generateMetadata } from './canob-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14WithActivePlayersServerKeywordPage />;
}
