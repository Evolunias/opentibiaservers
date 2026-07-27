import Ameria14WithActivePlayersServerKeywordPage, { generateMetadata } from './ameria-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria14WithActivePlayersServerKeywordPage />;
}
