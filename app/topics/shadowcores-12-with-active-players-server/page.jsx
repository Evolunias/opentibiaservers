import Shadowcores12WithActivePlayersServerKeywordPage, { generateMetadata } from './shadowcores-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12WithActivePlayersServerKeywordPage />;
}
