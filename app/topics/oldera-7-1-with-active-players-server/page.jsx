import Oldera71WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71WithActivePlayersServerKeywordPage />;
}
