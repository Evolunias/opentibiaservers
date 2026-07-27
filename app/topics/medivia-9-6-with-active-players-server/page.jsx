import Medivia96WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-9-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96WithActivePlayersServerKeywordPage />;
}
