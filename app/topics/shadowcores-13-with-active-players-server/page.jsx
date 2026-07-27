import Shadowcores13WithActivePlayersServerKeywordPage, { generateMetadata } from './shadowcores-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13WithActivePlayersServerKeywordPage />;
}
