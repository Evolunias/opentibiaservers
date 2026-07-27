import Medivia15WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15WithActivePlayersServerKeywordPage />;
}
