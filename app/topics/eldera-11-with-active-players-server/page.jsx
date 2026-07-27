import Eldera11WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11WithActivePlayersServerKeywordPage />;
}
