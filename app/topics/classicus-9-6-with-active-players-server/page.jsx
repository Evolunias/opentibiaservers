import Classicus96WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96WithActivePlayersServerKeywordPage />;
}
