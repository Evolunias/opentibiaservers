import Realera13WithActivePlayersServerKeywordPage, { generateMetadata } from './realera-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13WithActivePlayersServerKeywordPage />;
}
