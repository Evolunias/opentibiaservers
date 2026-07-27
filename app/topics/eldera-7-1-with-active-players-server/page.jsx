import Eldera71WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera71WithActivePlayersServerKeywordPage />;
}
