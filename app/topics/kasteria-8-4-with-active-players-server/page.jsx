import Kasteria84WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria84WithActivePlayersServerKeywordPage />;
}
