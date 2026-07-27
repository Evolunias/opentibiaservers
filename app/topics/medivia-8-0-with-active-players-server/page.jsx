import Medivia80WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80WithActivePlayersServerKeywordPage />;
}
