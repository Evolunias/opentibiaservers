import Tibiascape80WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80WithActivePlayersServerKeywordPage />;
}
