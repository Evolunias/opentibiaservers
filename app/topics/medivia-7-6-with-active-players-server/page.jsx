import Medivia76WithActivePlayersServerKeywordPage, { generateMetadata } from './medivia-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia76WithActivePlayersServerKeywordPage />;
}
