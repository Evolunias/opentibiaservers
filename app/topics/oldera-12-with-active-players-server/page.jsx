import Oldera12WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12WithActivePlayersServerKeywordPage />;
}
