import Midhem11WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11WithActivePlayersServerKeywordPage />;
}
