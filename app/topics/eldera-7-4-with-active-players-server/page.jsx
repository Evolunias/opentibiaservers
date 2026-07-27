import Eldera74WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera74WithActivePlayersServerKeywordPage />;
}
