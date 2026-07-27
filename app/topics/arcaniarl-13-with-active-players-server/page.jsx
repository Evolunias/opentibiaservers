import Arcaniarl13WithActivePlayersServerKeywordPage, { generateMetadata } from './arcaniarl-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl13WithActivePlayersServerKeywordPage />;
}
