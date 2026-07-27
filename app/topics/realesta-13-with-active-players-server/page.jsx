import Realesta13WithActivePlayersServerKeywordPage, { generateMetadata } from './realesta-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta13WithActivePlayersServerKeywordPage />;
}
