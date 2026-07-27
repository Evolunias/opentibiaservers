import Luminera12WithActivePlayersServerKeywordPage, { generateMetadata } from './luminera-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera12WithActivePlayersServerKeywordPage />;
}
