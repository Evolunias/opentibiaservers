import Realesta11WithActivePlayersServerKeywordPage, { generateMetadata } from './realesta-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11WithActivePlayersServerKeywordPage />;
}
