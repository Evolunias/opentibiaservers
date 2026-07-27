import Eldera12WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12WithActivePlayersServerKeywordPage />;
}
