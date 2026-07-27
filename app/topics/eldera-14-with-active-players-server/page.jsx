import Eldera14WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14WithActivePlayersServerKeywordPage />;
}
