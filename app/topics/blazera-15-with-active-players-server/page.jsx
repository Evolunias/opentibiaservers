import Blazera15WithActivePlayersServerKeywordPage, { generateMetadata } from './blazera-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15WithActivePlayersServerKeywordPage />;
}
