import Midhem74WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem74WithActivePlayersServerKeywordPage />;
}
