import Eldera80WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80WithActivePlayersServerKeywordPage />;
}
