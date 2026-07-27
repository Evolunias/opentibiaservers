import Classicus100WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100WithActivePlayersServerKeywordPage />;
}
