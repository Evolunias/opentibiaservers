import Tibijka13WithActivePlayersServerKeywordPage, { generateMetadata } from './tibijka-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13WithActivePlayersServerKeywordPage />;
}
