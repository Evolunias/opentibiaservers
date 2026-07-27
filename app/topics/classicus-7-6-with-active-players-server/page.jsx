import Classicus76WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76WithActivePlayersServerKeywordPage />;
}
