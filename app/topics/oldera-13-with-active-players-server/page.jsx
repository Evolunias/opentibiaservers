import Oldera13WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13WithActivePlayersServerKeywordPage />;
}
