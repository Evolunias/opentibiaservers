import Tibiascape76WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape76WithActivePlayersServerKeywordPage />;
}
