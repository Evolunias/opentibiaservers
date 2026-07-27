import Classicus12WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12WithActivePlayersServerKeywordPage />;
}
