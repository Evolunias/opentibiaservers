import Midhem14WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14WithActivePlayersServerKeywordPage />;
}
