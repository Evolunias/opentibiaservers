import Kasteria80WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80WithActivePlayersServerKeywordPage />;
}
