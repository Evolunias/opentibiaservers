import Tibiaorigins12WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaorigins-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins12WithActivePlayersServerKeywordPage />;
}
