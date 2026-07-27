import Shadowcores11WithActivePlayersServerKeywordPage, { generateMetadata } from './shadowcores-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11WithActivePlayersServerKeywordPage />;
}
