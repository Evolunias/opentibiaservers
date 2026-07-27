import Tibijka15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibijka-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15WithActivePlayersServerKeywordPage />;
}
