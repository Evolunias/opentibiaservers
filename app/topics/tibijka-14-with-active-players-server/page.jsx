import Tibijka14WithActivePlayersServerKeywordPage, { generateMetadata } from './tibijka-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14WithActivePlayersServerKeywordPage />;
}
