import Evolera15WithActivePlayersServerKeywordPage, { generateMetadata } from './evolera-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera15WithActivePlayersServerKeywordPage />;
}
