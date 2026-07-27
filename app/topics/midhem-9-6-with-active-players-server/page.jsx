import Midhem96WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem96WithActivePlayersServerKeywordPage />;
}
