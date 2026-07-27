import Classicus13WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13WithActivePlayersServerKeywordPage />;
}
