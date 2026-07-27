import Venoreot15WithActivePlayersServerKeywordPage, { generateMetadata } from './venoreot-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15WithActivePlayersServerKeywordPage />;
}
