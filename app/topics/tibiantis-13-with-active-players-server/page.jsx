import Tibiantis13WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiantis-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis13WithActivePlayersServerKeywordPage />;
}
