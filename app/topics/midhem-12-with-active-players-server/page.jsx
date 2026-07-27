import Midhem12WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12WithActivePlayersServerKeywordPage />;
}
