import Oldera15WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15WithActivePlayersServerKeywordPage />;
}
