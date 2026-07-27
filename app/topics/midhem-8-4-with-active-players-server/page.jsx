import Midhem84WithActivePlayersServerKeywordPage, { generateMetadata } from './midhem-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem84WithActivePlayersServerKeywordPage />;
}
