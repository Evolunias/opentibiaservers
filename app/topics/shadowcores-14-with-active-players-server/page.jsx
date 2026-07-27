import Shadowcores14WithActivePlayersServerKeywordPage, { generateMetadata } from './shadowcores-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14WithActivePlayersServerKeywordPage />;
}
