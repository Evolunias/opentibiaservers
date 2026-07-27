import Realesta12WithActivePlayersServerKeywordPage, { generateMetadata } from './realesta-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12WithActivePlayersServerKeywordPage />;
}
