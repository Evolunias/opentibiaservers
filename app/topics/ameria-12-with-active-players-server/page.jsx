import Ameria12WithActivePlayersServerKeywordPage, { generateMetadata } from './ameria-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12WithActivePlayersServerKeywordPage />;
}
