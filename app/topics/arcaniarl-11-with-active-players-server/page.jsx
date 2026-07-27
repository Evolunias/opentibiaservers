import Arcaniarl11WithActivePlayersServerKeywordPage, { generateMetadata } from './arcaniarl-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl11WithActivePlayersServerKeywordPage />;
}
