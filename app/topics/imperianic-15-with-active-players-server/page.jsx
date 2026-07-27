import Imperianic15WithActivePlayersServerKeywordPage, { generateMetadata } from './imperianic-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Imperianic15WithActivePlayersServerKeywordPage />;
}
