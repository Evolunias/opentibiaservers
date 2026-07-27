import Oldera76WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera76WithActivePlayersServerKeywordPage />;
}
