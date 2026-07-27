import Tibiascape13WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13WithActivePlayersServerKeywordPage />;
}
