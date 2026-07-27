import Canob96WithActivePlayersServerKeywordPage, { generateMetadata } from './canob-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob96WithActivePlayersServerKeywordPage />;
}
