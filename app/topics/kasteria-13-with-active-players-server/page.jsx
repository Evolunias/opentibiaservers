import Kasteria13WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria13WithActivePlayersServerKeywordPage />;
}
