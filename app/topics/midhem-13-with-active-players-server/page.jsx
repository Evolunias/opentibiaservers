import Midhem13WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13WithActivePlayersServerKeywordPage />;
}
