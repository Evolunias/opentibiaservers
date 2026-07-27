import Oldera11WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11WithActivePlayersServerKeywordPage />;
}
