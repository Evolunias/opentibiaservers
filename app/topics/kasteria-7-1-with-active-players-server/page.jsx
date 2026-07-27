import Kasteria71WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria71WithActivePlayersServerKeywordPage />;
}
