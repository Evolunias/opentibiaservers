import Tibiascape96WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96WithActivePlayersServerKeywordPage />;
}
