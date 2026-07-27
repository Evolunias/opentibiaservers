import Kasteria96WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96WithActivePlayersServerKeywordPage />;
}
