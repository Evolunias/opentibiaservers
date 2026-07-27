import Classicus11WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11WithActivePlayersServerKeywordPage />;
}
