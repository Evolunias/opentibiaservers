import Midhem15WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15WithActivePlayersServerKeywordPage />;
}
