import Medivia14WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14WithActivePlayersServerKeywordPage />;
}
