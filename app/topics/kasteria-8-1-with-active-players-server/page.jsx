import Kasteria81WithActivePlayersServerKeywordPage, { generateMetadata } from './kasteria-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria81WithActivePlayersServerKeywordPage />;
}
