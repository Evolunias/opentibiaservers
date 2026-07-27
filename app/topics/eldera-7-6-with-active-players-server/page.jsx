import Eldera76WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera76WithActivePlayersServerKeywordPage />;
}
