import Classicus74WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74WithActivePlayersServerKeywordPage />;
}
