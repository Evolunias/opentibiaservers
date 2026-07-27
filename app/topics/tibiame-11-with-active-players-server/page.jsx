import Tibiame11WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiame-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11WithActivePlayersServerKeywordPage />;
}
