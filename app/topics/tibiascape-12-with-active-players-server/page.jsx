import Tibiascape12WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12WithActivePlayersServerKeywordPage />;
}
