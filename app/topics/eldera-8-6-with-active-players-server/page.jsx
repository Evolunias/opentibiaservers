import Eldera86WithActivePlayersServerKeywordPage, { generateMetadata } from './eldera-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera86WithActivePlayersServerKeywordPage />;
}
