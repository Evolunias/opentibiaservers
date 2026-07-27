import Eldera15WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15WithActivePlayersServerKeywordPage />;
}
