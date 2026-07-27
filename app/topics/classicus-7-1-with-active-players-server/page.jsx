import Classicus71WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71WithActivePlayersServerKeywordPage />;
}
