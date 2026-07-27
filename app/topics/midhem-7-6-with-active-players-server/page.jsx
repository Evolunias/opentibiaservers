import Midhem76WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem76WithActivePlayersServerKeywordPage />;
}
