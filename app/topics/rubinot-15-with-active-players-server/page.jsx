import Rubinot15WithActivePlayersServerKeywordPage, { generateMetadata } from './rubinot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15WithActivePlayersServerKeywordPage />;
}
