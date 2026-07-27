import Tibiantis15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiantis-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15WithActivePlayersServerKeywordPage />;
}
