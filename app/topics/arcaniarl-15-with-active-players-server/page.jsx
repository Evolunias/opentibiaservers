import Arcaniarl15WithActivePlayersServerKeywordPage, { generateMetadata } from './arcaniarl-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl15WithActivePlayersServerKeywordPage />;
}
