import Tibiascape11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiascape-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11WithActivePlayersServerKeywordPage />;
}
