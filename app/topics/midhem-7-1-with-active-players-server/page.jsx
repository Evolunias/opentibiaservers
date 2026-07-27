import Midhem71WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71WithActivePlayersServerKeywordPage />;
}
