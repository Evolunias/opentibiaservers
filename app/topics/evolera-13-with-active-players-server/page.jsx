import Evolera13WithActivePlayersServerKeywordPage, { generateMetadata } from './evolera-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Evolera13WithActivePlayersServerKeywordPage />;
}
