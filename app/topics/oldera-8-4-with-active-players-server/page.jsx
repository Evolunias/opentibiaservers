import Oldera84WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera84WithActivePlayersServerKeywordPage />;
}
