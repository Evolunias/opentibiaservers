import Midhem86WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-8-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem86WithActivePlayersServerKeywordPage />;
}
