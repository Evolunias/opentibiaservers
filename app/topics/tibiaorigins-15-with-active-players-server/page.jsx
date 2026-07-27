import Tibiaorigins15WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiaorigins-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins15WithActivePlayersServerKeywordPage />;
}
