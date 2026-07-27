import Tibiaorigins13WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaorigins-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins13WithActivePlayersServerKeywordPage />;
}
