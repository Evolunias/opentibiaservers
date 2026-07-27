import Kasteria11WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11WithActivePlayersServerKeywordPage />;
}
