import Blazera12WithActivePlayersServerKeywordPage, { generateMetadata } from './blazera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12WithActivePlayersServerKeywordPage />;
}
