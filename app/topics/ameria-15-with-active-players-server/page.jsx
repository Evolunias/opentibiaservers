import Ameria15WithActivePlayersServerKeywordPage, { generateMetadata } from './ameria-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15WithActivePlayersServerKeywordPage />;
}
