import Medivia12WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12WithActivePlayersServerKeywordPage />;
}
