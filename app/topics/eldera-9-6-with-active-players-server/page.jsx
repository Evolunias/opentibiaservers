import Eldera96WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96WithActivePlayersServerKeywordPage />;
}
