import Oldera74WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera74WithActivePlayersServerKeywordPage />;
}
