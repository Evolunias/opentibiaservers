import Tibiascape15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15WithActivePlayersServerKeywordPage />;
}
