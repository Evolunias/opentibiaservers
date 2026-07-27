import Eldera100WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera100WithActivePlayersServerKeywordPage />;
}
