import Realera12WithActivePlayersServerKeywordPage, { generateMetadata } from './realera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12WithActivePlayersServerKeywordPage />;
}
