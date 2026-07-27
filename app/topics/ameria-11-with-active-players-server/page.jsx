import Ameria11WithActivePlayersServerKeywordPage, { generateMetadata } from './ameria-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11WithActivePlayersServerKeywordPage />;
}
