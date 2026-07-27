import Ameria13WithActivePlayersServerKeywordPage, { generateMetadata } from './ameria-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13WithActivePlayersServerKeywordPage />;
}
