import WithActivePlayersNostaltherServerKeywordPage, { generateMetadata } from './with-active-players-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersNostaltherServerKeywordPage />;
}
