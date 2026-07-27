import Classicus81WithActivePlayersServerKeywordPage, { generateMetadata } from './classicus-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81WithActivePlayersServerKeywordPage />;
}
