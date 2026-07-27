import WithActivePlayersRealestaServerKeywordPage, { generateMetadata } from './with-active-players-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersRealestaServerKeywordPage />;
}
