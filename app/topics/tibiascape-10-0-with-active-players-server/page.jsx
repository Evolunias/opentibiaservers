import Tibiascape100WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100WithActivePlayersServerKeywordPage />;
}
