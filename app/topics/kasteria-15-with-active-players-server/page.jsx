import Kasteria15WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15WithActivePlayersServerKeywordPage />;
}
