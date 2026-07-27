import Medivia11WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11WithActivePlayersServerKeywordPage />;
}
