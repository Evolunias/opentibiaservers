import Eldera13WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13WithActivePlayersServerKeywordPage />;
}
