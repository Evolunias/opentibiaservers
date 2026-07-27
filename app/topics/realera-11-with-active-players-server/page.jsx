import Realera11WithActivePlayersServerKeywordPage, { generateMetadata } from './realera-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11WithActivePlayersServerKeywordPage />;
}
