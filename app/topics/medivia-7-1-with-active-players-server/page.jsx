import Medivia71WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia71WithActivePlayersServerKeywordPage />;
}
