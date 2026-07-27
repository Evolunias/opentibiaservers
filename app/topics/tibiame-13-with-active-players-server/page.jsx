import Tibiame13WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiame-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13WithActivePlayersServerKeywordPage />;
}
