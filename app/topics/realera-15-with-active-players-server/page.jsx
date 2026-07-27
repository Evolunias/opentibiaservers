import Realera15WithActivePlayersServerKeywordPage, { generateMetadata } from './realera-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15WithActivePlayersServerKeywordPage />;
}
