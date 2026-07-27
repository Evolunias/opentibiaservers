import Oldera80WithActivePlayersServerKeywordPage, { generateMetadata } from './oldera-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80WithActivePlayersServerKeywordPage />;
}
