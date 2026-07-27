import Oldera14WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14WithActivePlayersServerKeywordPage />;
}
