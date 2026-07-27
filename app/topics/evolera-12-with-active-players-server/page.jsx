import Evolera12WithActivePlayersServerKeywordPage, { generateMetadata } from './evolera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera12WithActivePlayersServerKeywordPage />;
}
