import Tibiame12WithActivePlayersServerKeywordPage, { generateMetadata } from './tibiame-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12WithActivePlayersServerKeywordPage />;
}
